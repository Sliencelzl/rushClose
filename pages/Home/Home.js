//Home.js
const app = getApp()
Page({
  data: {
    typelist: [],//首页图片集合
    typetext: [],//公告文字集合
    type:[],
    id:'',
    imgUrls: [{
      url: '/pages/images/one.jpg'
    }, {
      url: '/pages/images/two.jpg'
    }, {
      url: '/pages/images/three.jpg'
    }],
    indicatorDots: true, //小点

    autoplay: true, //是否自动轮播

    interval: 3000, //间隔时间

    duration: 3000, //滑动时间
  },
  //页面开的同时加载图片
  onLoad: function(res) {
   this.getImage()
   this.gettext()
  },
  //加载图片
  getImage(){
    const apiUrl = "https://easy-mock.com/mock/5c32eecb2888b25b4d972f34/xyw/DASH";
    var that = this
    wx.request({
      url: apiUrl,
      data: {
        
      },
      header: {
        'content-type': 'json'
      },
      success: (res) => {
        that.setData({
          typelist: res.data.typelist
        })
      }
    })
  },
  //加载公告的文字
  gettext(){
    const apiUrl1 = "https://easy-mock.com/mock/5c32eecb2888b25b4d972f34/xyw/DDAS";
    var that = this
    wx.request({
      url: apiUrl1,
      data:{

      },
      header: {
        'content-type': 'json'
      },
      success:(res)=>{
        
        that.setData({
          typetext: res.data.typetext
        })
      }
    })

  },
  jump:function(e){
    var that = this
    var index = parseInt(e.currentTarget.dataset.index)
    if ( index === 0) {
      wx.navigateTo({
        url: '../details/details?type=clothes_ST',
      })
    }
    if (index === 1) {
      wx.navigateTo({
        url: '../details/details?type=clothes_SK',
      })
    }
    if (index === 2) {
      wx.navigateTo({
        url: '../details/details?type=clothes_SU',
      })
    } 
    if (index === 3) {
      wx.navigateTo({
        url: '../details/details?type=clothes_OC',
      })
    } 
    if (index === 4) {
      wx.navigateTo({
        url: '../details/details?type=clothes_KZ',
      })
    } 
    if (index === 5) {
      wx.navigateTo({
        url: '../details/details?type=clothes_MJ',
      })
    } 
    if (index === 6) {
      wx.navigateTo({
        url: '../details/details?type=clothes_PY',
      })
    }
    if (index === 7) {
      wx.navigateTo({
        url: '../details/details?type=clothes_JK',
      })
    } 
    if (index === 8) {
      wx.navigateTo({
        url: '../details/details?type=clothes_YR',
      })
    } 
    if (index === 9) {
      wx.navigateTo({
        url: '../details/details?type=clothes_CS',
      })
    } 
    if (index === 10) {
      wx.navigateTo({
        url: '../details/details?type=clothes_WJ',
      })
    }
    if (index === 11) {
      wx.navigateTo({
        url: '../details/details?type=clothes_SZ',
      })
    }      
  }, 
})