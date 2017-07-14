// pages/userinfo/userinfo.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userList: [
      {
        name: "",
        sex: "",
        con: "",
        province: "",
        url: "",
      }
    ],
    actionSexItems: ['男','女'],
    sexIndex: 0,
    actionConItems: ['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座'],
    conIndex: 0,
    btnColor: "#6c6c6c",

  },

  //性别弹出窗
  pickerSexSelected: function (e) {
    console.log('picker发送选择改变，性别为' + e.detail.value);
     wx.setStorageSync("sex", e.detail.value);
     this.setData({
            sexIndex: e.detail.value,
            btnColor: "#ffc324",
     });
  },
  //星座弹出窗口  可以将数据放在本地setStorage
  pickerConSelected: function (e) {
     console.log('picker发送选择改变，星座为' + e.detail.value);
      wx.setStorageSync("con", e.detail.value);
      this.setData({
             conIndex: e.detail.value,
             btnColor: "#ffc324",
      });
  },


  //点击保存按钮 就可以保存数据到本地
  buttontap: function (e) {
    wx.showModal({
      title: '温馨提示：',
      content: '修改信息成功',
      showCancel: false,
      })
  },


  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    var that = this;

    //这里是本地的信息获取
    if(wx.getStorageSync("con") !== ''){
      this.setData({
        conIndex: wx.getStorageSync("con")
      })
    }
    if(wx.getStorageSync("sex") !== ''){
      this.setData({
        sexIndex: wx.getStorageSync("sex")
      })
    }

    //登录的信息创建
    wx.login({
      success: function (e) {
        wx.setStorage({
          key: "key",
          data: e.errMsg
        })
      }
    })

    //获取用户的信息
    wx.getUserInfo({
      success: function(res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var sex;
        //先将信息存放到本地
        wx.setStorageSync('name',nickName);
        wx.setStorageSync('url',avatarUrl);

        if(userInfo.gender === 1){
          sex = "男";
        }else{
          sex = "女"
        }
        var user = [{
          name: nickName,
          sex: sex,
          con: "处女座",
          province: province,
          url: avatarUrl,
        }]
        that.setData({
            userList: user,
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
