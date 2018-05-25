import { getBanner, getRecommend } from '../../api/index.js'
import utils from '../../utils/index'

Page({
  data: {
    banners: [],
    products: [],
    recommends: [],
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 3000,
    duration: 500
  },
  onLoad: function() {
    wx.removeStorageSync('isLogin')
    this.getData()
  },

  getData: function(callback) {
    Promise.all([getBanner(), getRecommend()]).then(result => {
      this.setData({
        banners: result[0].banners,
        indicatorDots: result[0].length > 0,
        recommends: result[1]
      })
      callback && callback()
    })
  },

  // app.json window.enablePullDownRefresh 设置为true
  onPullDownRefresh: function() {
    this.getData(() => {
      wx.stopPullDownRefresh()
    })
  },
  onGotoWeb: function(e) {
    let data = e.currentTarget.dataset
    let item = data.item
    wx.navigateTo({
      url: `/page/guihua/page/webview/webview?url=${item}`
    })
  },
  onBuy: function() {
    let isLogin = wx.getStorageSync('isLogin') || false
    if (!isLogin) {
      wx.navigateTo({
        url: '/page/guihua/page/login/login'
      })
    } else {
      utils.showToast('产品详情建设中')
    }
  }
})
