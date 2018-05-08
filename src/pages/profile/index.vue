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
        <img class="btn-fans" src="/static/images/index/userhome_btn_followed_pressed@3x.png" alt="">
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
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526366953&di=314e33f2503a6b22a86ae2c8509931e6&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.pet18.com%2FUploadFiles%2FFCK%2F2017-03%2F62.jpg',
      fellow: 0,
      fans: 0,
      isFellowed: true,
      photos: [
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2749416574,3192784076&fm=27&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526366976&di=d293e538e042d0ff6100488fe5a7807f&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.gtimg.com%2Fzj%2Fpics%2Fhv1%2F140%2F199%2F2257%2F146812310.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1021963430,3630777085&fm=27&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526367008&di=d326d00654d7fc7f4ad2c0f376404706&imgtype=jpg&er=1&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171101%2F76ee1368b8b74effb6563c1e6ad35b28.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525772305747&di=2644a1903f5ab4bc23753f0c4e182a83&imgtype=0&src=http%3A%2F%2Fpic.962.net%2Fup%2F2017-10%2F15079503982847043.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526367036&di=333b025c3c1dfab6db31c875a26e2a2c&imgtype=jpg&er=1&src=http%3A%2F%2Ftc.sinaimg.cn%2Fmaxwidth.2048%2Ftc.service.weibo.com%2Fimage_uc_cn%2Ff4f8fff6064b4f3db694685cca19f73f.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526367047&di=c051b429a763b93e61873cc627040695&imgtype=jpg&er=1&src=http%3A%2F%2Fimgup01.hxmeishi.com%2F2017-10%2F17%2F18%2F15082363812189_0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2908020051,1554588663&fm=27&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=204577712,1205833780&fm=27&gp=0.jpg'
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
