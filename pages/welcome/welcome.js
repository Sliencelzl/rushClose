//welcome.js
Page({
  //点击跳转到首页
  jumpHome:function(options) {
    wx.navigateTo({
      url: '../Home/Home',
    })
  }
})