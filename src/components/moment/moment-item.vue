<template>
    <div :data="data" :key="index" class="moment-item" @click="onMomentClick">
      <div class="user-info">
        <div class="avatar-small">
          <img class="avatar-small-image" :src="moment.user_avatar" alt="用户头像">
        </div>
        <div class="name-time">
          <div class="flex-wrp name-container">
            <p class="name">{{ moment.user_name }}</p>   
            <div class="btn-follow" @click.stop="toggleFollow">
              <img class="img-follow" :src="moment.following ? '/static/images/moment/fans_btn_followed@2x.png' : '/static/images/moment/fans_btn_unfollowed@2x.png'" alt="关注按钮" mode="widthFix">
            </div>
          </div>
          <p class="time">
            {{ moment.pub_time }}
              <span v-show="moment.location" class="location">{{ moment.location }}</span>
          </p>
        </div>
        <div class="btn-context-menu" @click.stop="onMenuClick">
          <img class="img-context-menu" src="/static/images/moment/feed_icon_menu@2x.png" alt="菜单按钮" mode="widthFix">
        </div>
      </div>
      <div class="content">
        <p class="title">{{ moment.title }}</p>
        <div class="big-show">
          <img v-for="(citem, cindex) in moment.content_list" :class="gridClass" 
            :key="cindex" :src="citem" alt="展示用大图" mode="aspectFill" @click.stop="onPictureClick(citem, moment.content_list)">
        </div>
        <!-- :class="['more',moment.content_list.length > 1 && moment.content_list.length < 5 ? 'normal': 'less']" -->
      </div>
      <div class="action-panel">
        <div class="action-item">
            <img :src="moment.liked ? '/static/images/moment/feed_icon_collect_sel@2x.png' : '/static/images/moment/feed_icon_collect_nor@2x.png'" alt="like" mode="widthFix" @click.stop="toggleLove">
            <span v-show="moment.like_count" class="likes-counts">{{moment.like_count }}</span>
        </div>
        <div class="action-item" >
            <img src="/static/images/moment/feed_icon_comment@2x.png" alt="comment" mode="widthFix" @click.stop="toggleLove">
            <span v-show="moment.comment_count" class="comments-counts">{{moment.comment_count}}</span>
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
      ]
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
      this.moment.following = !this.moment.following
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
              that.like_count -= 1
            } else {
              that.like_count += 1
            }
            that.loved = !that.loved
          }
        })
    },
    shareMoment () {
    },
    onCommentClick () {

    },
    onMenuClick () {
      wx.showActionSheet({
        itemList: ['删除', '举报', '不感兴趣'],
        success: res => {
          console.log(res.tapIndex)
        },
        fail: res => {
          console.log(res.errMsg)
        }
      })
    }
  },
  created () { },
  computed: {
    lovedImgUrl () {
      return this.loved ? '/static/images/moment/feed_icon_like_sel@2x.png' : '/static/images/moment/feed_icon_like_nor@2x.png'
    },
    gridClass () {
      let className = 'one-column'
      let contentLength = this.moment.content_list.length
      if (contentLength % 3 === 0 || contentLength > 4) {
        className = 'three-column'
      } else if (contentLength % 2 === 0) {
        className = 'two-column'
      }
      return className
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
.name-time .btn-follow {
  display: flex;
  align-items: center;
  margin-left: 15rpx;
}
.name-time .time {
  font-family: "HelveticaNeueLTPro Lt";
  margin-top: 10rpx;
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
.user-info .img-follow {
  width: 80rpx;
}
.user-info  .btn-context-menu {
  display: flex;
  padding: 20rpx 10rpx;
}
.user-info .img-context-menu {
  width: 50rpx;
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
  border: 1px solid #eee;
}

.content .big-show img.one-column {
  width: 100%;
  height: 500rpx;
}
.content .big-show img.two-column {
  width: 372rpx;
  height: 372rpx;
  margin-top: 8rpx;
}
.content .big-show img.two-column:nth-child(1) {
  margin-top: 0;
}
.content .big-show img.two-column:nth-child(2) {
  margin-top: 0;
}

.content .big-show img.three-column {
  width: 246rpx;
  height: 246rpx;
  margin-top: 6rpx;
}
.content .big-show img.three-column:nth-child(1) {
  margin-top: 0;
}
.content .big-show img.three-column:nth-child(2) {
  margin-top: 0;
}
.content .big-show img.three-column:nth-child(3) {
  margin-top: 0;
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
  min-width: 130rpx;
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

