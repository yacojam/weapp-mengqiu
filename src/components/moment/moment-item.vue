<template>
    <div :data="data" :key="index" class="moment-item" @click="onMomentClick">
      <div class="user-info">
        <div class="avatar-small">
          <img class="avatar-small-image" :src="moment.headLogo" alt="用户头像">
        </div>
        <div class="name-time">
          <p class="name">{{ moment.name }}</p>
          <p class="time">
            {{ moment.time }}
              <span v-show="moment.location" class="location">{{ moment.location }}</span>
          </p>
        </div>
        <div class="flex-wrp" v-if="isMyMoment" @click.stop="toggleFollow">
          <img class="btn-follow" src="/static/images/moment/fans_btn_unfollowed@2x.png" alt="关注按钮" mode="widthFix">
        </div>
        <div class="flex-wrp" v-else @click.stop="onDeleteClick">
          <img class="btn-delete" src="/static/images/moment/fans_btn_unfollowed2_pressed@2x.png" alt="删除按钮" mode="widthFix">
        </div>
      </div>
      <div class="content">
        <p class="title">{{ moment.title }}</p>
        <div class="big-show">
        <img v-for="(citem, cindex) in moment.imgSrc" :class="moment.className" 
            :key="cindex" :src="citem" alt="展示用大图" mode="aspectFill" @click.stop="onPictureClick(citem, moment.imgSrc)">
        </div>
        <!-- :class="['more',moment.imgSrc.length > 1 && moment.imgSrc.length < 5 ? 'normal': 'less']" -->
      </div>
      <div class="action-panel">
        <div class="action-item">
            <img :src="moment.showStar ? '/static/images/moment/feed_icon_collect_sel@2x.png' : '/static/images/moment/feed_icon_collect_nor@2x.png'" alt="like" mode="widthFix" @click.stop="toggleLove">
            <span v-show="moment.loveNum" class="likes-counts">{{moment.loveNum }}</span>
        </div>
        <div class="action-item" >
            <img src="/static/images/moment/feed_icon_comment@2x.png" alt="comment" mode="widthFix" @click.stop="toggleLove">
            <span v-show="moment.commentNum" class="comments-counts">{{moment.commentNum}}</span>
        </div>
        <div class="action-item">
            <img src="/static/images/moment/feed_icon_share@2x.png" alt="share" mode="widthFix" @click.stop="toggleLove">
        </div>
      </div>
    </div>
</template>

<script>
import fly from '@/utils/mq-fly'

export default {
  data () {
    return {
      imgList: [
        '/static/images/moment/feed_icon_like_nor@2x.png'
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
    toggleFollow () {
      this.loved = !this.loved
    },
    onPictureClick (src, imageUrls) {
      wx.previewImage({
        current: src,
        urls: imageUrls
      })
    },
    onDeleteClick () {
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
      return this.loved ? '/static/images/moment/feed_icon_like_sel@2x.png' : '/static/images/moment/feed_icon_like_nor@2x.png'
    }
  }
}
</script>

<style scoped>
.moment-item {
  border-bottom: 18rpx solid #f1f1fa;
}

.user-info {
  display: flex;
  align-items: center;
  padding: 40rpx;
}
.user-info .name-time {
  flex: 1;
  margin-left: 26rpx;
  margin-right: 26rpx;
  display: flex;
  flex-direction: column;
}
.name-time .name {
  font-family: "HelveticaNeueLTPro Md";
  font-size: 26rpx;
  color: #000;
}
.name-time .time {
  font-family: "HelveticaNeueLTPro Lt";
  margin-top: 12rpx;
  font-size: 22rpx;
  color: #000;
  opacity: 0.7;
}
.name-time .location {
  margin-left: 24rpx;
  font-size: 22rpx;
  color: #000;
  opacity: 0.7;
}
.user-info .btn-follow {
  width: 122rpx;
}
.user-info .btn-delete {
  width: 122rpx;
}

.content .title {
  font-size: 32rpx;
  margin-bottom: 25rpx;
  margin-left: 40rpx;
}
.big-show {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.content .big-show img.less {
  width: 100%;
  height: 500rpx;
}
.content .big-show img.normal {
  width: 372rpx;
  height: 372rpx;
  margin-bottom: 8rpx;
}
.content .big-show img.more {
  width: 246rpx;
  height: 246rpx;
  margin-bottom: 6rpx;
}

.action-panel {
  display: flex;
  align-items: center;
  padding-left: 40rpx;
  padding-top: 25rpx;
  padding-bottom: 25rpx;
}
.likes-counts,
.comments-counts {
  font-size: 32rpx;
  color: #000;
  display: inline-block;
  width: 80rpx;
}
.action-item {
  min-width: 140rpx;
  display:flex;
  align-items:center;
}
.action-item img {
  width: 46rpx;
}
.action-item span {
  font-family: "HelveticaNeueLTPro Roman";
  font-size: 32rpx;
  margin-left: 10rpx;
}
</style>

