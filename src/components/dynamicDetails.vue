<template>
  <div class="user-shows-content">
    <div v-for="(item, index) in listData" :key="index" class="items">
      <div class="head-portrait left-correction">
        <img :src="item.headLogo" alt="用户头像">
      </div>
      <div class="info">
        <p class="name">{{ item.name }}</p>
        <p class="time">
          <span class="subtime">{{ item.subtime }}</span>{{ item.time }}
        </p>
      </div>
      <div class="delete-btn" @click="showDelete">
        <img src="/static/imgs/feed_icon_del2@3x.png" alt="选择删除按钮">
      </div>

      <p class="title left-correction">{{ item.title }}</p>

      <div class="big-show">
        <img v-for="(citem, cindex) in item.imgSrc" :class="item.className" :key="cindex" :src="citem" alt="展示用大图" mode="scaleToFill">
      </div>
      <!-- :class="['more',item.imgSrc.length > 1 && item.imgSrc.length < 5 ? 'normal': 'less']" -->
      <div class="operate left-correction">
        <span class="like" @click="toggleLove">
          <img :src="lovedImgUrl" alt="like">
        </span>
        <span class="likes-counts">{{ loveNum }}</span>
        <span class="comments">
          <img src="/static/imgs/index/feed_icon_comment@2x.png" alt="like">
        </span>
        <span class="comments-counts">{{ commentNum }}</span>
        <span class="forward">
          <img src="/static/imgs/index/feed_icon_share@2x.png" alt="like">
        </span>
        <span v-if="showStar" class="star">
          <img src="/static/imgs/index/feed_icon_collect_nor@2x.png" alt="">
        </span>
      </div>

      <div class="bottom-line"></div>
    </div>
  </div>
</template>

<script>
import fly from '../../utils/mqIO'

export default {
  data () {
    return {
      imgList: [
        '/static/imgs/index/feed_icon_like_nor@2x.png'
      ],
      loved: false
    }
  },
  props: {
    showStar: {
      type: Boolean,
      'default': false
    },
    lifeStatusData: {
      type: Array
    },
    loveNum: {
      type: Number,
      default: 0
    },
    commentNum: {
      type: Number,
      default: 0
    },
    refId: {
      type: Number,
      default: 0
    }
  },
  methods: {
    showDelete () {
      let that = this
      wx.showActionSheet({
        itemList: ['删除'],
        itemColor: '#FF0000',
        success: res => {
          wx.showModal({
            title: '删除提示',
            content: '  确定删除这条动态吗',
            confirmText: '删除',
            success: res => {
              fly.post('/mq/moments/delete', {
                id: that.refId
              }).then(res => {
                console.log(res)
                if (res.code === 1) {
                  wx.showToast({
                    title: '删除成功',
                    icon: 'success'
                  })
                  setTimeout(() => {
                    wx.switchTab({
                      url: '/pages/petNest/main'
                    })
                  }, 1000)
                } else {
                  console.log(res)
                  wx.showToast({
                    title: '删除失败，请重试！',
                    icon: 'none'
                  })
                }
              }).catch(res => {
                console.log(res)
              })
            }
          })
        }
      })
    },
    // 点赞和取消点赞
    toggleLove () {
      let that = this
      let _url = ''
      that.loved ? _url = 'cancel' : _url = 'execute'
      console.log(_url)
      fly.post(`/information/${_url}/love`, {
        type_id: 7,
        ref_id: that.refId
      })
        .then((res) => {
          if (res.code === 1) {
            if (that.loved) {
              that.loveNum -= 1
            } else {
              that.loveNum += 1
            }
            that.loved = !that.loved
          }
        })
    }
  },
  created () { },
  computed: {
    listData () {
      let _data = this.lifeStatusData
      let className = 'less'
      for (let i in _data) {
        if (_data[i].imgSrc.length > 4) {
          className = 'more'
        }
        if (_data[i].imgSrc.length >= 2 && _data[i].imgSrc.length <= 4) {
          className = 'normal'
        }
        _data[i] = Object.assign(_data[i], { className })

        className = 'less'
      }
      return _data
    },
    lovedImgUrl () {
      return this.loved ? '/static/imgs/index/feed_icon_like_sel@2x.png' : '/static/imgs/index/feed_icon_like_nor@2x.png'
    }
  }
}
</script>

<style scoped>
.items {
  padding-top: 40rpx;
  position: relative;
}
.left-correction {
  padding-left: 40rpx;
}

.head-portrait img {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
}

.user-shows-content {
  padding: 0 0;
  background-color: #fff;
}
.info,
.head-portrait {
  display: inline-block;
  height: 60rpx;
  margin-bottom: 50rpx;
}
.info {
  vertical-align: bottom;
  margin-left: 26rpx;
}
.info .name {
  font-family: "HelveticaNeueLTPro Md";
  font-size: 26rpx;
  color: #000;
  margin-bottom: 14rpx;
}
.info .time {
  font-family: "HelveticaNeueLTPro Lt";
  font-size: 22rpx;
  color: #000;
  opacity: 0.7;
}
.time .subtime {
  margin-right: 12rpx;
}
.user-shows-content .title {
  font-size: 32rpx;
  font-family: "PingFang SC";
  margin-bottom: 30rpx;
}
.big-show {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.user-shows-content .big-show img.less {
  width: 100%;
  height: 500rpx;
}
.user-shows-content .big-show img.normal {
  width: 372rpx;
  height: 372rpx;
  margin-bottom: 8rpx;
}
.user-shows-content .big-show img.more {
  width: 246rpx;
  height: 246rpx;
  margin-bottom: 6rpx;
}
.operate {
  display: flex;
  align-items: center;
  padding-top: 30rpx;
  padding-bottom: 30rpx;
  position: relative;
}
.operate img {
  width: 46rpx;
  height: 46rpx;
}
.operate .likes-counts,
.operate .comments-counts {
  font-family: "HelveticaNeueLTPro Roman";
  font-size: 32rpx;
  color: #000;
  display: inline-block;
  width: 80rpx;
}
.operate .like,
.operate .forward {
  margin-right: 16rpx;
}
.operate .comments {
  margin-right: 16rpx;
}
.operate .star {
  position: absolute;
  top: 30rpx;
  right: 40rpx;
}

.bottom-line {
  width: 100%;
  background-color: #f1f1fa;
  height: 18rpx;
}

.delete-btn {
  width: 50rpx;
  height: 10rpx;
  padding: 20rpx;
  position: absolute;
  top: 45rpx;
  right: 40rpx;
}

.delete-btn img {
  width: 50rpx;
  height: 10rpx;
  vertical-align: top;
}
</style>

