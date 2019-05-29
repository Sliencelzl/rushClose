//Member.js
Page({
  data: {
    rName:'',
    mobile:'',
    password:'',
    showView:true,
    showModalStatus: false,
  },
  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },
  //确认按钮事件
  userPhoneInput:function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  //获取到用户姓名的值
  userNameInput:function (e) {
    this.setData({
      rName: e.detail.value
    })
  },
  //获取用户输入的密码的值
  userPasswordInput:function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  //会员注册确认事件按钮
  sure:function (e) {
    let that = this;
    let mobile = this.data.mobile;
    let rName = this.data.rName;
    let password = this.data.password;
    let phonetel = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (rName == '') {
      wx.showToast({
        title: '请输入用户名',
        icon: 'none',
      })
      return false
    } else if (mobile == '') {
      wx.showToast({
        title: '手机号不能为空',
        icon:'none'
      })
      return false
    }
    else if (mobile.length != 11) {
      wx.showToast({
        title: '手机号长度有误！',
        icon: 'none',
      })
      return false;
    }
    if (!(/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/).test(mobile)) {
      wx.showToast({
        title: '手机号有误！',
        icon: 'none',
      })
      return false;
    } else if (password == ''){
      wx.showToast({
        title: '请输入会员密码',
        icon:'none'
      })
      return false
    } else if (this.data.rName != '' || this.data.mobile != '' || this.data.password != ''){
      that.setData({
        showView:(!that.data.showView),
        showModalStatus:false
      })
    }
    return true;
  },


  //动画效果
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 200, //动画时长 
      timingFunction: "linear", //线性 
      delay: 0 //0则不延迟 
    });

    // 第2步：这个动画实例赋给当前的动画实例 
    this.animation = animation;

    // 第3步：执行第一组动画 
    animation.opacity(0).rotateX(-100).step();

    // 第4步：导出动画对象赋给数据对象储存 
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画 
    setTimeout(function () {
      // 执行第二组动画 
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
      this.setData({
        animationData: animation
      })
      //关闭 
      if (currentStatu == "close") {
        this.setData({
            showModalStatus: false
          });
      }
    }.bind(this), 200)
    // 显示 
    if (currentStatu == "open") {
      this.setData({
          showModalStatus: true
        });
     }
  }
})