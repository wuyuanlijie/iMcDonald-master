// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true,
  },
 //事件处理函数
  // maixiangMembertap: function () {
  //
  //   console.log("测试情况！！!"),
  //   wx.navigateTo({
  //     url: "../userinfo/userinfo"
  //   })
  // },

  // 登录检测 弹窗
  ifregister: function () {
    // var accesstoken = wx.getStorageSync(CurserInfo).accesstoken;
    // if(!accesstoken) {
    //   this.setData ({
    //     modalHidden:false
    //   })
    // }
    var that = this;
    var key = wx.getStorageSync('key');
    if(key === "login:ok") {
      that.setData({
        modalHidden:true
      })
      wx.navigateTo({
        url: "/pages/userinfo/userinfo"
      })
    }else{
      that.setData({
        modalHidden:false
      })
    }
  },
  confirmChange: function () {
    this.setData({
      modalHidden: true
    })
    wx.navigateTo({
      url: "/pages/register/register"
    })
  },
  cancellChange: function () {
    this.setData({
      modalHidden: true
    })
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },





  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
