<template>
  <div class="container">
    <div class="top">
      <img class="avatar" :src="user.avatar" alt="">
      <p>
        <span class="name">{{user.name}}</span><br>
        <span class="des">{{user.des}}<img @click="jump('signature')" class="alter" src="/static/imgs/index/user_icon_sign@3x.png" alt=""></span>

      </p>
    </div>
    <div class="center">
      <ul> 
        <li @click="jump('consumer',{
          lookUserId: userid
        })"><p>{{user.publish}}</p><p>发布</p></li>
        <li @click="jump('concern')"><p>{{user.fellow}}</p><p>关注</p></li>
        <li @click="jump('fans')"><p>{{user.fans}}</p><p>粉丝</p></li>
      </ul>
    </div>
    <div class="bottom">
      <ul>
        <li @click="jump('myMessage')"><img src='/static/imgs/index/user_icon_sms@3x.png' alt="">我的消息</li>
        <li @click="jump('collection')"><img src='/static/imgs/index/user_icon_collect@3x.png' alt="">我的收藏</li>
        <li><img src='/static/imgs/index/user_icon_suggest@3x.png' alt="">意见反馈</li>
        <li><img src='/static/imgs/index/user_icon_about@3x.png' alt="">关于萌球</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import fly from '../../../utils/mqIO'
export default {
  data () {
    return {
      user: {
        avatar: '/static/imgs/default.png',
        name: 'Andrew',
        des: '你们地球人就喜欢猜',
        publish: 0,
        fellow: 0,
        fans: 0,
        userid: 0
      }
    }
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
    getUserInfo () {
      let userid = wx.getStorageSync('uid')
      this.userid = userid
      // fly.get('http://apis.starluo.com/profiles/' + userid).then((res) => {
      // })
    }
  },
  created () {
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/sass/variable';
  .top {
    background: $color-normal;
    width: 100%;
    height: 336rpx;
    box-sizing: border-box;
    padding-top: 56rpx;
    padding-left: 64rpx;
    display:flex;
  }
  .top .avatar{
    @include image-avatar-large;
  }
  .top p {
    margin-left: 36rpx;
    padding-top: 42rpx;
  }
  .top .name {
    @include font-46;
  }
  .top .des {
    display:flex;
    @include font-26-normal;
    margin-top: 24rpx;
    opacity: 0.7;
    img {
      margin-left: 20rpx;
      width: 30rpx;
      height: 30rpx;
    }
  }
  .center {
    width: 100%;
    height: 143rpx;
    position: relative;
  }
  .center ul{
    position: absolute;
    left: 64rpx;
    top: -82rpx;
    width: 622rpx;
    height: 184rpx;
    box-sizing: border-box;
    background: rgba(255,255,255,.88);
    border-radius: 20rpx;
    display: flex;
    padding: 28rpx 0rpx;
    box-shadow: 0rpx 4rpx 21rpx rgba(4,0,0, .2);
  }
  .center ul li {
    text-align:center;
    flex: 1;
  }
  .center ul li:not(:last-child) {
    border-right: 1rpx solid $color-splitline;
  }
  .center ul li p:last-child {
    @include font-26-normal;
    margin-top: 24rpx;
    opacity: 0.5;
  }
  .center ul li p:first-child {
    @include font-32;
    margin-top: 24rpx;
  }
  .bottom {
    width: 100%;
  }
  .bottom ul{
    display:flex;
    padding-left: 64rpx;
    flex-direction: column;
    border-top: 1rpx solid $color-splitline;
    background: #fff;
  }
  .bottom ul li {
    @include font-32-median;
    line-height: 88rpx;
    border-bottom: 1rpx solid $color-splitline;
    display:flex;
    align-items: center;
  }
  .bottom ul li img{
    width: 40rpx;
    height: 40rpx;
    margin-right: 34rpx;
  }
</style>
