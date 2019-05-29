//pay.js
var util = require('../../utils/util.js')

Page({
  data:{
    date:'',
    time:'',
    aname:'',
    addressa:'',
    totalCount: null,
    totalCountPrice: null,
    username:'',
    userphone:'',
    userbeizhu:'',
    info:[],
    history:[]
  },
  //页面加载获取到上一个页面的衣服件数和金额
  onLoad:function(options ) {
    var that = this;
    that.setData({
      totalCount: options.totalCountDate,
      totalCountPrice: options.totalCountPriceDate
    })
  },
 //获取当前位置点击事件
  getMap:function (e) {
    let that = this
   wx.getLocation({
     type:'wgs84',
     success: function (res) {
       let latitude = res.latitude
       let longitude = res.longitude
       let speed = res.speed
       let accuracy = res.accuracy
       wx.chooseLocation({
         latitude: latitude,
         longitude: longitude,
         success: function (res) {
           let aname = res.name
           let addressa = res.address
            that.setData({
              aname: aname,
              addressa: addressa
            })
        },
       })
     }
   })
  },
  //取衣日期
  bindDateChange:function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  //取衣时间
  changeTime:function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  //跳转到订单界面
  jumporder:function (e) {
    let that = this
    const username = that.data.username
    const userphone = that.data.userphone
    const date = that.data.date
    const time = that.data.time
    const userbeizhu = that.data.userbeizhu
    const totalCount = that.data.totalCount
    const totalCountPrice = that.data.totalCountPrice
    const aname = that.data.aname
    const addressa = that.data.addressa
    let infos = {username,userphone,date,time,userbeizhu,totalCount,totalCountPrice,aname,addressa};
    let info = that.data.info;
    info.push(infos)

    let arr = wx.getStorageSync("test1") || [];
    arr.unshift(infos);
    wx.setStorageSync("test1", arr)

    this.setData({
      history: wx.getStorageSync("test1")
    })

    console.log('订单数据',that.data.history)
    wx.switchTab({
      url: '../order/order',
    })
  },

  //获取到输入框里面的值
  userNameInput:function(e){
    this.setData({
      username: e.detail.value
    })
  },
  userPhoneInput:function(e){
    this.setData({
      userphone: e.detail.value
    })
  },
  userdate:function(e){
    this.setData({
      date: e.detail.value
    })
  },
  usertime:function(e){
    this.setData({
      time: e.detail.value
    })
  },
  userbeizhu:function(e){
    this.setData({
      userbeizhu: e.detail.value
    })
  }

})