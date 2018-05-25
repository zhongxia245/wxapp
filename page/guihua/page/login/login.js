import utils from '../../utils/index'

Page({
  data: {
    showLogin: true
  },
  onLoad: function() {
    wx.hideTabBar()
  },
  onUnload: function() {
    wx.showTabBar()
  },
  onLogin: function() {
    const { username, password } = this.data
    if (!username || !password) {
      utils.showToast('帐号或密码不能为空!', 2000)
    } else {
      utils.showBusy('登录中')
      if (username === 'demo' && password === '123456') {
        utils.showSuccess('登录成功!')
        wx.setStorage({
          key: 'isLogin',
          data: true
        })
        wx.navigateBack()
      } else {
        utils.showToast('帐号或者密码有误! 帐号:demo,密码:123456', 2000)
      }
    }
  },
  onChange: function(e) {
    let val = e.detail.value
    let name = e.currentTarget.dataset.name
    this.setData({
      [name]: val
    })
  },
  switchTab: function() {
    this.setData({
      showLogin: !this.data.showLogin
    })
  }
})
