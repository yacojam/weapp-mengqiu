<script>
  import fly from '@/utils/mq-fly'
  export default {
    created () {
      // 如果uid和token已经存在，不需要登陆直接从storage中获取
      let uid = wx.getStorageSync('uid')
      let token = wx.getStorageSync('token')
      if (uid && token) {
        fly.config.headers['x-cert-uid'] = uid
        fly.config.headers['x-cert-token'] = token
        return
      }
      // 获取用户登录信息
      wx.login({
        success: function (res) {
          if (res.code) {
            let Code = res.code
            // 根据code获取用户的open_id
            fly.post('/wx/open/mq/jscode2session', {
              code: Code
            }).then((res) => {
              let openid = res.data.openid
              // 获取用户信息
              wx.getUserInfo({
                success: function (res) {
                  let userInfo, nickName, avatarUrl, gender, province, city, country
                  userInfo = res.userInfo
                  nickName = userInfo.nickName
                  avatarUrl = userInfo.avatarUrl
                  gender = userInfo.gender // 性别 0：未知、1：男、2：女
                  province = userInfo.province
                  city = userInfo.city
                  country = userInfo.country
                  // 调用登录接口
                  fly.post('user/mq/loginByOpenAuthCode', {
                    nickName, avatarUrl, gender, province, city, country, open_id: openid, code: Code
                  }).then((res) => {
                    fly.config.headers['x-cert-uid'] = res.data.uid
                    fly.config.headers['x-cert-token'] = res.data.token
                    wx.setStorageSync('uid', res.data.uid)
                    wx.setStorageSync('token', res.data.uid)
                  })
                }
              })
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    }
  }
</script>

<style lang="scss">
  /*在这里引入全局公共的CSS,并且style标签不加scoped,所有页面都有效*/
  @import '~@/styles/app.css';
  @import '~@/styles/common.scss';
</style>
