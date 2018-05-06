<template>
    <div :data="data" :key="index" class="items" @click="onMomentClick">
        <div class="head-portrait left-correction">
        <img :src="moment.headLogo" alt="用户头像">
        </div>
        <div class="info">
        <p class="name">{{ moment.name }}</p>
        <p class="time">
            <span class="subtime">{{ moment.subtime }}</span>{{ moment.time }}
        </p>
        </div>
        <div class="delete-btn" @click.stop="showDelete">
        <img src="/static/images/feed_icon_del2@3x.png" alt="选择删除按钮">
        </div>

        <p class="title left-correction">{{ moment.title }}</p>

        <div class="big-show">
        <img v-for="(citem, cindex) in moment.imgSrc" :class="moment.className" 
            :key="cindex" :src="citem" alt="展示用大图" mode="aspectFill" @click.stop="onPictureClick(citem, moment.imgSrc)">
        </div>
        <!-- :class="['more',moment.imgSrc.length > 1 && moment.imgSrc.length < 5 ? 'normal': 'less']" -->
        <div class="operate left-correction">
        <span class="like" @click.stop="toggleLove">
            <img :src="lovedImgUrl" alt="like">
        </span>
        <span class="likes-counts">{{ moment.loveNum }}</span>
        <span class="comments">
            <img src="/static/images/index/feed_icon_comment@2x.png" alt="like">
        </span>
        <span class="comments-counts">{{ moment.commentNum }}</span>
        <span class="forward">
            <img src="/static/images/index/feed_icon_share@2x.png" alt="like">
        </span>
        <span v-if="moment.showStar" class="star">
            <img src="/static/images/index/feed_icon_collect_nor@2x.png" alt="">
        </span>
        </div>

        <div class="bottom-line"></div>
    </div>
</template>

<script>
import fly from '@/utils/mq-fly'

export default {
  data () {
    return {
      imgList: [
        '/static/images/index/feed_icon_like_nor@2x.png'
      ],
      loved: false
    }
  },
  props: {
    moment: {
      type: Object,
      default: null
    }
  },
  methods: {
    onAvatarClick () {
      wx.navigateTo({
        url: `/pages/profile/main`
      })
    },
    onMomentClick (url) {
      wx.navigateTo({
        url: `/pages/moment/main`
      })
    },
    onPictureClick (src, imageUrls) {
      wx.previewImage({
        current: src,
        urls: imageUrls
      })
    },
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
    },
    shareMoment () {
    },
    onCommentClick () {

    }
  },
  created () { },
  computed: {
    lovedImgUrl () {
      return this.loved ? '/static/images/index/feed_icon_like_sel@2x.png' : '/static/images/index/feed_icon_like_nor@2x.png'
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

