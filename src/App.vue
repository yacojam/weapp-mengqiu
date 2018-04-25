<script>
  import fly from '../utils/mqIO'
  export default {
    created () {
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

<style>
  page {
    height: 100%;
    background-color: #f1f1fa;
  }
  .container {
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    background-color: #f1f1fa;
  }
  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;

    font-family: 'Microsoft Yahei', sans-serif;
    line-height: 1;
  }

  /* http://meyerweb.com/eric/tools/css/reset/
     v2.0 | 20110126
     License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
</style>
