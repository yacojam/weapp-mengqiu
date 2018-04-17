<script>
  import fly from '../utils/mqIO'
  export default {
    created () {
      // 调用API从本地缓存中获取数据
      const logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)

      console.log('app created and cache logs by setStorageSync')

      // 获取用户登录信息
      wx.login({
        success: function (res) {
          if (res.code) {
            // 发起网络请求
            var userInfo, nickName, avatarUrl, gender, province, city, country
            let Code = res.code
            wx.getUserInfo({
              success: function (res) {
                userInfo = res.userInfo
                nickName = userInfo.nickName
                avatarUrl = userInfo.avatarUrl
                gender = userInfo.gender // 性别 0：未知、1：男、2：女
                province = userInfo.province
                city = userInfo.city
                country = userInfo.country
                fly.post('user/mq/loginByOpenAuthCode', {
                  nickName, avatarUrl, gender, province, city, country, code: Code
                }).then((res) => {
                  console.log(res)
                  fly.config.headers['x-cert-uid'] = res.data.uid
                  fly.config.headers['x-cert-token'] = res.data.token
                  wx.setStorageSync('uid', res.data.uid)
                  // wx.setStorageSync('token', res.data.token)
                })
              }
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
  .container {
    height: 100%;
    justify-content: space-between;
    box-sizing: border-box;
    position: fixed;
    width: 100%;
    top: 0;
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
