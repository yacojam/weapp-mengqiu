<template>
  <div class="container">
    <tabs :tabs="['推荐','关注']" @tabChanged="handleTabChange"></tabs>
    <div>
      {{text}}
    </div>
  </div>
</template>

<script>
import tabs from '@/components/NavbarTabs/NavbarTabs'

export default {
  data () {
    return {
      text: ''
    }
  },

  components: {
    tabs
  },

  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    handleTabChange (tabIndex) {
      if (tabIndex === 0) {
        this.text = '推荐页面'
      } else {
        this.text = '关注页面'
      }
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/sass/variable.scss';
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
  //@include image-avatar-large;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
