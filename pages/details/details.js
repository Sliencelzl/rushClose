//details.js
Page({
  data:{
      totalCount:0,
      totalCountPrice:0,
      clothsName:[],
  },
  onLoad(params){
    const apiUrl3 = "https://easy-mock.com/mock/5c32eecb2888b25b4d972f34/xyw/" + params.type
    wx.request({
      url: apiUrl3,
      data: {
        
      },
      header: {
        'content-type': 'json'
      },
      success: (res)=>{
        this.setData({
          clothsName: res.data.subject
        })
      }
    })
  },
   /**
   * 绑定加数量事件
   */
  addcount(e){
    const index = e.currentTarget.dataset.index;
    let clothsName = this.data.clothsName;
    let num = clothsName[index].num;
    clothsName[index].num++;
    this.setData({
      clothsName: clothsName
    });
    this.getTotalPrice();
    this.getTotalCountPrice()
  },
   /**
   * 绑定减数量事件
   */
  minusCount(e){
    const index = e.currentTarget.dataset.index;
    let clothsName = this.data.clothsName;
    let num = clothsName[index].num;
    if (num == 0){
      return false
    }
    clothsName[index].num--;
    this.setData({
      clothsName: clothsName
    });
    this.getTotalPrice();
    this.getTotalCountPrice()
  },
   /**
   * 计算总数量事件
   */
  getTotalPrice() {
    let clothsName = this.data.clothsName;               
    let total = 0;
    for (let i = 0; i < clothsName.length; i++) {  
      if (clothsName[i]) {                         
        total += parseInt(clothsName[i].num);
      }
    }                                            
    this.setData({                   
      clothsName: clothsName,
      totalCount: total,
    });
  },

   /**
   * 计算总数量总金额事件
   */
  getTotalCountPrice() {
    let clothsName = this.data.clothsName;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < clothsName.length; i++) {           // 循环列表得到每个数据
      if (clothsName[i]) {                                  // 判断选中才会计算价格
        total += clothsName[i].num * clothsName[i].price;   // 所有价格加起来
      }
    }
    this.setData({                                          // 最后赋值到data中渲染到页面
      clothsName: clothsName,
      totalCountPrice: total.toFixed(2)
    });
  },
   /**
   * 预约按钮的点击事件
   */
  select:function(option){
    var that = this;
     if(this.data.totalCount == 0){
        wx.showToast({
          title: '  请您先选择！',
          icon:'none',
          image:'/pages/images/crywhite.png',
        })
     } else {
        wx.navigateTo({
          url: '../pay/pay?totalCountDate=' + that.data.totalCount + '&totalCountPriceDate=' + that.data.totalCountPrice,  
        })
     }
  },
})