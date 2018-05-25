import ProductsData from './mock/products'
import BannersData from './mock/banners'
import RecommendData from './mock/recommend'

const BASE_URL = 'http://www.haoguihua.cn'

let URL = {
  getBanner: '/api/v2/homepage/banner',
  getRecommend: '/api/v2/products/recommend',
  getProducts: '/api/v2/products/all'
}

for (const key in URL) {
  if (URL.hasOwnProperty(key)) {
    URL[key] = BASE_URL + URL[key]
  }
}

function request(method, url, data) {
  return new Promise(function(resolve, reject) {
    //网络请求
    wx.request({
      url: url,
      data: data,
      method: method || 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res) {
        if (res.statusCode != 200) {
          reject({ error: '服务器忙，请稍后重试', code: 500 })
          return
        }
        resolve(res.data.data)
      },
      fail: function(res) {
        reject({ error: '网络错误', code: 0 })
      },
      complete: function(res) {}
    })
  })
}

export const getBanner = () => {
  // return request('GET', URL['getBanner'])
  return new Promise((resolve, reject) => {
    resolve(BannersData.data)
  })
}

export const getRecommend = () => {
  // return request('GET', URL['getRecommend'])
  return new Promise((resolve, reject) => {
    resolve(RecommendData)
  })
}

export const getProducts = () => {
  // return request('GET', URL['getProducts'])
  return new Promise((resolve, reject) => {
    resolve(ProductsData.data)
  })
}
