<template>
  <div>
    <textarea v-model="text" placeholder="给萌球配上文字..."></textarea>
    <div class="uploadImages">
      <div class="imgs" v-for="(item, index) in pics" :key="index">
        <video :show-play-btn="false" objectFit="fill" :controls="false" :src="item" alt=""></video>
        <img @click="deleteImg(index)" class="delete" src="../../../static/imgs/index/feed_icon_del@3x.png" alt="">
      </div>
      <img @click="selectVideo" src="../../../static/imgs/index/feed_icon_add@3x.png" alt="">
    </div>
    <div class="send">
      <img src="../../../static/imgs/index/feed_btn_send_press@3x.png" alt="">
    </div>
  </div>

</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        pics: [],
        text: '',
        first: true
      }
    },
    methods: {
      selectVideo () {
        let _this = this
        wx.chooseVideo({
          sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
          sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
          compressed: true,
          maxDuration: 60,
          success: function (res) {
            let imgsrc = res.tempFilePath
            _this.pics = _this.pics.concat(imgsrc)
          }
        })
      },
      deleteImg (index) {
        this.pics.splice(index, 1)
      }
    },
    onShow () {
      if (this.first) {
        this.selectVideo()
        this.first = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/sass/variable.scss';
  textarea {
    width: 100%;
    height: 256rpx;
    line-height: 39rpx;
    margin-top: 38rpx;
    padding-left: 40rpx;
    padding-right: 40rpx;
    box-sizing: border-box;
    margin-bottom: 22rpx;
  }
  ._textarea {
    @include font-26-normal;
  }
  .uploadImages {
    padding-left: 10rpx;
    display:flex;
    flex-wrap: wrap;
  }
  .uploadImages img{
    width: 120rpx;
    height: 120rpx;
    margin-left: 30rpx;
    margin-bottom: 40rpx;
  }
  .uploadImages video {
    width: 120rpx;
    height: 120rpx;
    margin-left: 30rpx;
    margin-bottom: 40rpx;
  }
  .uploadImages .imgs {
    position: relative;
  }
  .uploadImages .delete {
    position: absolute;
    width: 44rpx;
    height: 44rpx;
    right: -22rpx;
    top: -22rpx;
    margin: 0;
  }
  .send {
    width: 100%;
    text-align:center;
  }
  .send img {
    margin-top: 80rpx;
    width: 312rpx;
    height: 88rpx;
  }
</style>
