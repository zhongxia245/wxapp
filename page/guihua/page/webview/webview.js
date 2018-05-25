Page({
  data: {
    url: ''
  },
  // 这里不能用箭头函数，否则获取不到 this
  onLoad: function(param) {
    this.setData({
      url: param.url
    })
  }
})
