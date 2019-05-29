//order.js
Page({
  data: {
    //radioCheckVal: 0,
    //定义新的数组
    ordersClothes: [],
    history: [],
    showImg:0
  },
  //顶部切换
//  radioCheckedChange: function (e) {
//    this.setData({
//      radioCheckVal: e.detail.value
//    })
//  },
  //清楚缓存的数据
  clear: function (e) {
    let dataset = e.target.dataset;
    let index = dataset.index;
    this.data.history.splice(index, 1);
    wx.clearStorageSync("test1")
    this.setData({
      history: this.data.history
    })
    //wx.clearStorageSync("test1")
  },
  //数据的刷新，需要刷新的数据丢在onShow里面
  onShow: function () {
    this.setData({
      history: wx.getStorageSync("test1")
    })
    console.log('order.js中history数据', this.data.history)
  },
  //再来一单返回首页
  goBackHome: function () {
    wx.switchTab({
      url: '../Home/Home',
    })
  }
})