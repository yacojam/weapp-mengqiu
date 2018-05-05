<template>
  <div>
    <div class="top">
      <div>
        <img class="avatar" :src="avatar" alt="">
      </div>
      <p class="name">{{name}}</p>
      <p class="des">{{des}}</p>
      <p class="fellow"><span>{{fellow}}</span>关注 <span>{{fans}}</span>粉丝</p>
      <div>
        <img class="btn-fans" src="/static/imgs/index/userhome_btn_followed_pressed@3x.png" alt="">
      </div>
    </div>

    <!--<latest-release-list :photos="photos"></latest-release-list>-->
    <PublishList :publishList="publishList"></PublishList>

  </div>
</template>

<script>
import fly from '@/utils/mq-fly'
import PublishList from '@/components/publish-list'
export default {
  data () {
    return {
      name: 'Evelynn',
      des: '你们地球人就喜欢猜',
      avatar: require('../../../static/imgs/index/0.jpg'),
      fellow: 0,
      fans: 0,
      isFellowed: true,
      photos: [
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg'
      ],
      lookUserId: 0,
      page: 1,
      size: 10,
      publishList: [
      ]
    }
  },
  methods: {
    jump (type = 'moment') {
      wx.navigateTo({
        url: `/pages/${type}/main`
      })
    },
    getUserRelease () {
      if (this.lookUserId === 0) {
        this.publishList = []
        return
      }
      fly.post('mq/moments/list', {
        page: this.page,
        size: this.size,
        'look_user_id': this.lookUserId
      }).then((res) => {
        if (res.code === 1) {
          this.publishList = res.data.list
          console.log(res.data.list)
        }
      }).catch(res => {
        console.log(res)
      })
    }
  },
  components: {
    PublishList
  },
  onLoad (options) {
    this.lookUserId = options.lookUserId
    this.getUserRelease()
  }
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 526rpx;
  background: $color-normal;
  display:flex;
  flex-direction: column;
  align-items:center;
}
  .top .avatar{
    @include image-avatar-large;
    border:4rpx solid #000;
    margin-top: 56rpx;
  }
  .top .name {
    @include font-46;
    margin-top: 25rpx;
  }
  .top .des {
    @include font-26-normal;
    opacity: 0.7;
    margin-top: 12rpx;
  }
  .top .fellow {
    @include font-32;
    margin-top: 30rpx;
    span {
      display:inline-block;
      width: 80rpx;
      text-align:center;
    }
    span:last-child {
      margin-left: 35rpx;
    }
  }
  .top .btn-fans {
    width: 156rpx;
    height: 68rpx;
    margin-top: 25rpx;
  }

</style>
