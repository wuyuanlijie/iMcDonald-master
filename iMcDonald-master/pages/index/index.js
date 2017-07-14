//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userList: [],

  },
  //事件处理函数
  //我要积分页面 跳转 这个要做出判断是否登录 没有登录跳转其他的页面
  bindViewIntegral: function (event){
    var that = this;
    //获得当前的本地登录信息
    var key = wx.getStorageSync('key');

    if(key === "login:ok") {
      wx.switchTab({
        url: '../qrcode/qrcode'
      })
    }else {
      wx.navigateTo({
        url: '../qrcodenull/qrcodenull'
      })
    }

  },

  bindIntegralMall: function (){
    wx.navigateTo({
      url: '../integralmall/integralmall'
    })
  },
  bindHappynotice: function (){
    wx.navigateTo({
      url: '../happynotice/happynotice'
    })
  },


  onLoad: function () {
    // console.log('onLoad')
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
    var that = this;
    wx.request({
      url:"https://www.easy-mock.com/mock/595f3f139adc231f357b0615/McDonald/list",
      method: 'GET',
      success: function(res) {
        that.setData({
          userList: res.data.data,
        })
      }
    });
  }
})
