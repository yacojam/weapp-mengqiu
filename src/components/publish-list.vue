<template>
<div>
    <div v-if="sortList.length > 0" class="publishList">
      <ul>
        <li class="listItem" v-for="(item, index) in sortList" :key="index">
          <div class="date">
            <p>{{item.month}}月{{item.day}}日</p>
            <p><span>周{{item.week}}</span><span>{{item.year}}</span></p>
          </div>
          <div v-for="(key,inx) in item.list" class="publish" :key="inx"  @click="jump('details', {
          momentid: key.id
        })">
            <div>
              <img :src="key.img_list[0]" alt="">
            </div>
            <p>
              {{key.text}}
            </p>
          </div>
        </li>
      </ul>
    </div>
    <empty-template v-if="sortList.length <= 0" emptyImageUrl="/static/imgs/empty/empty-petNest@2x.png"></empty-template>
    <div @click="jump('release')" class="btn-publish">
      <img src="/static/imgs/index/feed_btn_write_nor@3x.png" alt="">
    </div>
  </div>
</template>

<script>
import emptyTemplate from './empty-template'

export default {
  components: {
    emptyTemplate
  },
  methods: {
    jump (type, query) {
      let url = `/pages/${type}/main`
      // url添加query参数
      if (query) {
        url += '?'
        for (let key in query) {
          url += `${key}=${query[key]}&`
        }
        url = url.substr(0, url.length - 1)
      }
      wx.navigateTo({
        url: url
      })
    },
    getWeek (week) {
      switch (week) {
        case 1:
          return '一'
        case 2:
          return '二'
        case 3:
          return '三'
        case 4:
          return '四'
        case 5:
          return '五'
        case 6:
          return '六'
        case 0:
          return '日'
      }
    }
  },
  props: {
    publishList: {
      type: Array,
      default: []
    }
  },
  computed: {
    // 经过排序和处理处理过后的数据列表（时间从大到小）
    sortList () {
      let arr = this.publishList
      arr.sort((a, b) => {
        return b['create_time'] - a['create_time']
      })
      // 新的列表按照日期重新分类
      let newPublishList = []
      for (let i = 0; i < arr.length; i++) {
        let date = new Date(arr[i]['create_time'])
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let week = date.getDay()
        let lastItem = newPublishList[newPublishList.length - 1]
        if (lastItem && lastItem.day === day && lastItem.month === month && lastItem.year === year) {
          lastItem.list.push(arr[i])
        } else {
          let listItem = {}
          listItem.year = year
          listItem.month = month
          listItem.day = day
          listItem.week = this.getWeek(week)
          listItem.list = []
          listItem.list.push(arr[i])
          newPublishList.push(listItem)
        }
      }
      return newPublishList
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../common/sass/variable';
  .publishList {

  }
  .publishList ul {
    display:flex;
    width:100%;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 40rpx;
  }
  .publishList ul .date {
     margin-top: 42rpx;
     margin-bottom: 32rpx;
     p:first-child {
       @include font-46;
       margin-bottom: 18rpx;
     }
     p:last-child {
       @include font-22;
       opacity: .7;
       span:first-child {
         margin-right: 24rpx;
       }
     }
   }
  .publishList ul .publish {
    display:flex;
    height: 200rpx;
    width: 100%;
    margin-bottom: 18rpx;
    img {
      width: 200rpx;
      height: 200rpx;
    }
    p {
      @include font-26-median;
      margin-left: 24rpx;
      width: 425rpx;
    }
  }
  .btn-publish {
    position: fixed;
    right: 28rpx;
    bottom: 5rpx;
    img {
      width: 124rpx;
      height: 140rpx;
    }
  }
</style>
