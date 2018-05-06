<template>
  <div class="container">
    <textarea v-model="text" placeholder="给萌球配上文字..."></textarea>
    <div v-if="videoPath !== ''" class="uploadVideo">
      <video id="myVideo" :show-play-btn="true" :show-center-play-btn="true" objectFit="contain" :controls="true" :src="videoPath" alt=""></video>
    </div>
    <div @click="publish" class="send">
      <img src="/static/images/index/feed_btn_send_press@3x.png" alt="">
    </div>
  </div>

</template>

<script>
  import fly from '@/utils/mq-fly'
  export default {
    name: 'index',
    data () {
      return {
        videoPath: '',
        text: ''
      }
    },
    methods: {
      // 发布视频动态
      publish () {
        fly.post('mq/moments/publish', {
          'type_id': 2,
          'text': this.text,
          'video_link': this.videoPath
        }).then((res) => {
          // 上传成功
          console.log(res)
          if (res.code === 1) {
            wx.showToast({
              title: '发布成功',
              icon: 'success'
            })
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
      this.videoPath = wx.getStorageSync('uploadVideo')
    },
    onUnload () {
      this.videoPath = ''
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    background: #ffffff;
  }
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
  .uploadVideo {
    width: 100%;
    padding: 0rpx 40rpx 25rpx;
    border-bottom: 1px solid $color-splitline;
  }
  .uploadVideo video {
    width: 670rpx;
    height: 360rpx;
  }
  .send {
    width: 100%;
    text-align:center;
  }
  .send img {
    margin-top: 40rpx;
    width: 312rpx;
    height: 88rpx;
  }
</style>
