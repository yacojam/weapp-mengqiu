<template>
  <div>
    <textarea v-model="text" placeholder="给萌球配上文字..."></textarea>
    <div class="uploadImages">
      <div class="imgs" v-for="(item, index) in pics" :key="index">
        <img :src="item" alt="">
        <img class="delete" src="/static/imgs/index/feed_icon_del@3x.png" alt="">
      </div>
      <img src="/static/imgs/index/feed_icon_add@3x.png" alt="">
    </div>
    <div @click="publish" class="send">
      <img src="/static/imgs/index/feed_btn_send_press@3x.png" alt="">
    </div>
  </div>

</template>

<script>
import fly from '@/utils/mq-fly'
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
    selectImg () {
      let _this = this
      wx.chooseImage({
        count: 1, // 最多可以选择的图片张数，默认9,9 - _this.pics.length
        sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
        success: function (res) {
          let imgsrc = res.tempFilePaths
          _this.pics = _this.pics.concat(imgsrc)
        }
      })
    },
    deleteImg (index) {
      this.pics.splice(index, 1)
    },
    // 发布图片动态
    publish () {
      fly.post('mq/moments/publish', {
        'type_id': 1,
        'text': this.text,
        'img_list': this.pics
      }).then((res) => {
        // 上传成功
        if (res.code === 1) {
          wx.showToast({
            title: '发布成功',
            icon: 'success'
          })
          setTimeout(() => {
            wx.switchTab({
              url: '/pages/petNest/main'
            })
          }, 2000)
        } else {
          // 上传失败
          wx.showToast({
            title: '发布失败',
            icon: 'success'
          })
        }
      })
    }
  },
  onShow () {
    if (this.first) {
      let imgsrc = wx.getStorageSync('uploadImgs')
      console.log(imgsrc)
      this.pics = this.pics.concat(imgsrc)
      this.first = false
    }
  },
  onUnload () {
    this.pics = []
    this.first = true
  }
}
</script>

<style lang="scss" scoped>
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
  display: flex;
  flex-wrap: wrap;
}
.uploadImages img {
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
  text-align: center;
}
.send img {
  margin-top: 80rpx;
  width: 312rpx;
  height: 88rpx;
}
</style>
