// 引入fly实例
const Fly = require('flyio/dist/npm/wx')
const api = require('./connect')
const fly = new Fly()

// fly.config.headers = {
//   'x-cert-uid': 20,
//   'x-cert-token': 'B626086DFB43E94A931547891C26CCD1'
// }
fly.config.timeout = 5000
fly.parseJson = true
fly.config.baseURL = api.url

// 添加请求拦截器
fly.interceptors.request.use(request => {
  // 给所有请求添加自定义header
  //   request.headers['X-Tag'] = 'flyio';
  // 打印出请求体
  // console.log(request.body)
  // 终止请求
  // var err=new Error('xxx')
  // err.request=request
  // return Promise.reject(new Error(''))

  // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request
})

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  response => {
    // 只将请求结果的data字段返回
    return response.data
  },
  err => {
    // 发生网络错误后会走到这里
    return Promise.reject(err)
  }
)

export default fly
