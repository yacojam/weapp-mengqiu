<template>
  <div class="container">
    <MomentItem :moment="moment"></MomentItem>
    <div class="likePeople" v-if="loveUserList.length > 0">
      <div v-for="(item, index) in loveUserList" :key="index" v-if="index < 3">
        <img :src="item.img" alt="">
      </div>
      <p>
        <span v-if="loveUserList.length > 3">等</span>
        <span>{{loveUserList.length}}人觉得很赞</span>
      </p>
    </div>
    <div class="comments-list">
      <div class="item" v-for="(item,index) in commentList" :key="index">
        <div class="head-img">
          <img :src="item['user_info'].img" alt="用户头像">
        </div>
        <div class="details">
          <p class="name">{{item['user_info'].nickname}}</p>
          <p class="words">{{item.comment}}</p>
        </div>
        <div class="time">
          <span class="subtime">昨天</span>09:21</div>
      </div>
    </div>
    <div class="add-comment">
      <input type="text" placeholder="发表评论..." class="inputs" v-model="commentDetails">
      <span class="submit" @click="subComment">发表</span>
    </div>
  </div>
</template>

<script>
import MomentItem from '@/components/moment/moment-item'
import EmptyTemplate from '@/components/empty-template'
import fly from '@/utils/mq-fly'

export default {
  components: {
    MomentItem, EmptyTemplate
  },
  data () {
    return {
      momentid: 0,
      moment: {},
      commentDetails: '',
      loveUserList: [
      ],
      commentList: [
      ],
      type: 'comments'
    }
  },
  computed: {
    loveNum () {
      return this.loveUserList.length
    },
    commentNum () {
      return this.commentList.length
    }
  },
  created () {
  },
  methods: {
    getDetails () {
      if (this.momentid === 0) {
        return []
      }
      fly.post('mq/moments/detail', {
        id: this.momentid
      }).then((res) => {
        console.log(res)
        if (res.code === 1) {
          this.loveUserList = res.data['love_user_list']
        }
      })
    },

    subComment () {
      let that = this
      fly.post('/information/execute/comment', {
        type_id: 7,
        ref_id: that.momentid,
        comment: that.commentDetails
      })
        .then((res) => {
          if (res.code === 1) {
            this.getCommentList()
          }
        })
    },

    getCommentList () {
      fly.post('/information/listByComment', {
        type_id: 7,
        ref_id: this.momentid
      }).then(res => {
        console.log(res)
        this.commentList = res.data.list
      })
    }
  },
  onLoad (options) {
    // 获取页面url参数中的momentid
    if (!options.momentid) {
      this.momentid = 0
      return
    }
    this.momentid = options.momentid
    this.getCommentList()
  },
  watch: {
    momentid () {
      this.moment = wx.getStorageSync('moment')
      this.getDetails()
    }
  }
}
</script>

<style lang="scss" scoped>
.likePeople {
  width: 100%;
  height: 60rpx;
  display: flex;
  box-sizing: border-box;
  padding: 0rpx 40rpx;
  align-items: center;
  background: #fff;
  margin-bottom: 18rpx;
  margin-top: -18rpx;
  img {
    width: 40rpx;
    height: 40rpx;
    border-radius: 50%;
    margin-right: 10rpx;
  }
  img:last-child {
    margin-right: 16rpx;
  }
  & > p {
    @include font-22;
    opacity: 0.7;
  }
}
.comments-list {
  width: 100%;
  background-color: #fff;
  margin-bottom: 266rpx;
  padding-left: 40rpx;
  box-sizing: border-box;
}
.item {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  padding: 40rpx 0rpx;
  display: flex;
  align-items: center;
  border-bottom: 1rpx solid #e0e0e0;
}
.head-img,
.details {
  display: inline-block;
}
.head-img img {
  width: 66rpx;
  height: 66rpx;
  border-radius: 50%;
  margin-right: 26rpx;
}
.time {
  position: absolute;
  top: 40rpx;
  right: 40rpx;
  font-family: "HelveticaNeueLTPro Lt";
  font-size: 22rpx;
  color: #000;
  opacity: 0.7;
}
.time .subtime {
  margin-right: 12rpx;
}
.details .name {
  font-family: "PingFang SC";
  font-weight: bold;
  font-size: 26rpx;
  margin-bottom: 16rpx;
}
.details .words {
  font-family: "PingFang SC";
  font-size: 26rpx;
}
.add-comment {
  width: 100%;
  background-color: #fff;
  padding: 10rpx 0;
  position: fixed;
  bottom: 0;
}
.inputs {
  width: 532rpx;
  height: 66rpx;
  border-radius: 33rpx;
  padding-left: 40rpx;
  margin-left: 40rpx;
  float: left;
  background-color: #f1f1fa;
  font-family: "PingFang SC";
  color: #000;
  font-size: 32rpx;
  opacity: 0.5;
}
.submit {
  float: right;
  margin-right: 40rpx;
  line-height: 66rpx;
  font-family: "PingFang SC";
  color: #000;
  font-size: 32rpx;
}
</style>
