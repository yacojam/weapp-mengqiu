<template>
  <div class="container">
    <div class="content">
      <div class="take-picture">
        <img @click="directToUploadImg" src="/static/images/release/feed_icon_photo@3x.png" alt="挑个片">
        <p>挑个片</p>
      </div>
      <div class="take-video">
        <img @click="directToUploadVideo" src="/static/images/release/feed_icon_shoot@3x.png" alt="拍个片">
        <p>拍个片</p>
      </div>
    </div>
    <div class="back">
      <img @click="backIndexPage" src="/static/images/release/feed_icon_close@3x.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [],
      pushData: []
    }
  },
  components: {},
  methods: {
    backIndexPage () {
      wx.switchTab({
        url: `/pages/index/main`
      })
    },
    directToUploadImg () {
      let that = this
      wx.chooseImage({
        count: 3, // 最多可以选择的图片张数，默认9
        sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
        success: function (res) {
          that.imgList = res.tempFilePaths
          that.uploadFiles(0)
        }
      })
    },
    uploadFiles (index) {
      let that = this
      wx.uploadFile({
        url: 'https://apis.starluo.com/picture/upload/20000',
        filePath: that.imgList[index],
        name: 'img',
        header: {
          'Content-Type': 'multipart/form-data'
        },
        success: res => {
          let _data = JSON.parse(res.data)
          if (_data.code === 1) {
            that.pushData.push(_data.data.path)
            index += 1
            if (index === that.imgList.length) {
              wx.setStorageSync('uploadImgs', that.pushData)
              wx.navigateTo({
                url: '/pages/upload/main'
              })
            } else {
              that.uploadFiles(index)
            }
          }
        },
        fail: res => {
          console.log(res)
        }
      })
    },
    directToUploadVideo () {
      wx.chooseVideo({
        sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
        compressed: true,
        maxDuration: 60,
        success: function (res) {
          let videoSrc = res.tempFilePath
          wx.setStorageSync('uploadVideo', videoSrc)
          wx.navigateTo({
            url: '/pages/uploadVideo/main'
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.content,
.cancle {
  width: 100%;
  position: absolute;
  bottom: 198rpx;
}
.cancle {
  bottom: 10rpx;
}
.take-picture,
.take-video {
  display: inline-block;
  font-size: 30rpx;
  font-family: "PingFang SC";
}
.take-picture p,
.take-video p {
  text-align: center;
  margin-top: 38rpx;
}
.take-picture img,
.take-video img {
  width: 132rpx;
  height: 132rpx;
  border-radius: 50%;
  display: inline-block;
}
.take-picture {
  margin-left: 160rpx;
  margin-right: 166rpx;
}
.back {
  width: 100%;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 10rpx;
}
.back img {
  width: 75rpx;
  height: 75rpx;
}
</style>
