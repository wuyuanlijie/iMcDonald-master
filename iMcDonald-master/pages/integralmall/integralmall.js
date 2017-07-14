// pages/integralmall/integralmall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:[],
    modalHidden: true,
  },

  // discounttap: function () {
  //   wx.navigateTo({
  //     url:"../integraldetail/integraldetail"
  //   })
  // },

  exchangetap: function () {
    this.setData({
      modalHidden: false,
    })
  },
  modalConfirm: function () {
    this.setData({
      modalHidden: true
    })
    wx.showModal({
      title: '温馨提示：',
      content: '您的积分不足',
      showCancel: false,
      })

  },
  modalCancel:function () {
    this.setData({
      modalHidden: true
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: "https://www.easy-mock.com/mock/595f3f139adc231f357b0615/McDonald/list",
      method: 'GET',
      success: function (res) {
        console.log(res);
        that.setData({
          imgs: res.data.image,
        })
      }
    })

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
