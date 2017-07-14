# iMcDonald-master   i麦当劳微信小程序（待完善）

### 学习使我happy!!!
 作为全栈的学习者，初学微信小程序，抱着试试做心态，一个星期内初步完成了这个项目。
 ![Alt text](https://raw.githubusercontent.com/wuyuanlijie/McDonald-s/master/gif/index.gif)

 ### 小程序是何方神圣？
   小程序是一种新的开放能力，开发者可以快速地开发一个小程序。小程序可以在微信内被便捷地获取和传播，同时具有出色的使用体验。
 ### 为什么选择它？
1. 用户可便捷地获取服务，无需安装或下载即可使用<br />
2. 具有更丰富的功能和出色的使用体验<br />
3. 封装一系列接口能力，帮助快速开发和迭代<br />
 ### 切身体验，你也可以来！
小程序对于新手来说，是很容易上手的，需要你用几天时间去熟悉小程序的构建过程和说明文档，你就可以初步做出一个比较完整的小程序。 我觉得小程序最屌地方还是rpx，使得小程序有很大的兼容性，在页面布局使用这个属性，可以适应不同的手机，这也使得我们降低工作量。而且小程序是一个不需要下载安装即可使用的应用，而且它的背后是强大的微信，所以，如果我们能够用自己的创造思维去看待这个，你会得到很大的收获O(∩_∩)O哈哈~。

## 项目工具及文档：
1. 微信web开发者工具：[微信小程序官网](https://mp.weixin.qq.com/debug/wxadoc/dev/) 微信开发的小程序编辑软件，下载安装即可使用，不需要去添加什么的；
2. 开发文档：[微信小程序宝典秘籍](https://www.w3cschool.cn/weixinapp/9wou1q8j.html) 这里面详细的介绍了小程序的各项信息，包括组件、框架、API等等；
3. Easy Mork： [easy-mock](www.easy-mock.com) 小程序后台数据可以在这里模拟，利用json格式；
4. 图标库： [Iconfont-阿里巴巴矢量图标库](http://www.iconfont.cn/) 这个是个好东西，以前我总是为找不到图标元素烦恼，但是现在有了它就啥也不怕了。
 
## 页面注册
    "pages":[
        "pages/index/index",   // 主页
        "pages/happynotice/happynotice",  //开心通告栏
        "pages/userinfo/userinfo",    //个人信息详情>
        "pages/queryintegral/queryintegral",  // 积分查询
        "pages/integralmall/integralmall", // 积分商城
        "pages/user/user",  //个人信息
        "pages/integraldetail/integraldetail",   //  优惠券详情
        "pages/qrcodenull/qrcodenull", // 请求注册页面
        "pages/register/register", // 注册信息页面
        "pages/qrcode/qrcode"  //我的二维码
     ], 
 
## 项目功能
#### 已实现功能：
 * 注册用户信息 
 * 手机号码验证(这里实现了页面) 
 * 个人信息修改
 * 优惠券信息查看 
 * 优惠券兑换
 * 积分查询 
 * 开心通告栏
#### 未实现功能：
 * 麦有礼卡片(这个是刚上线的功能)
 * 麦麦同乐会的注册
 * 文字页面-常见问题、积分规则...

## 项目GIF
  ![Alt text](https://github.com/wuyuanlijie/McDonald-s/blob/master/jifen.gif)
 ![Alt text](https://github.com/wuyuanlijie/McDonald-s/blob/master/gif/userinfo.gif)

  ![Alt text](https://github.com/wuyuanlijie/McDonald-s/blob/master/register.gif)

## 部分功能解析
### 1. 获取本地信息 
在这里我们首先要登录利用wx.login(OBJECT) **必写（不然获取不到用户的信息）** 然后利用方法wx.getUserInfo(OBJECT)获取用户信息
```javascript
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
        ...
```
### 2. 优惠券的显示及页面传值
这里我们从easy-mock获取到优惠券的信息并且将信息显示到页面上，我们就利用了wx:for这个控制属性绑定一个数组 这里我们还可以注意这个信息navigator是个跳转页面的属性，在跳转的过程中它可以传值,例如**?url={{item.url}}**这里我要穿的是图片地址信息到下个页面。
当然页面传值并不是只是这样方法，还有**设置全局的数据缓存**，**引入事件订阅和发布onfire.js**，这里就不一一介绍了有兴趣可以去Google
```html
   <block wx:for="{{imgs}}" wx:key="" class="block" >
    <swiper-item >
        <navigator url="/pages/integraldetail/integraldetail?url={{item.url}}&description={{item.description}}&prompt={{item.prompt}}">
            <image  src="{{item.url}}" class="side-img" />
            <view class="check click">查看详情</view>
        </navigator>
        <view class="exchange click" bindtap="exchangetap">立即兑换</view>
    </swiper-item>

  </block>
```    
我们需要在js文件中声明你的的优惠券数据imgs:[]，**注意这里是json格式加','** 
```javascript
 data: {
    imgs:[],
    modalHidden: true,
  },
```
利用wx.request(OBJECT)发起的是https请求，从easymock中获取数据信息,利用setData()改变imgs得值, 要注意一定要声明**var that = this**,因为wx:request里面是请求不到当前页面的data的数据信息，我们需要将this的赋值给that。还有**一个微信小程序，同时只能有5个网络请求连接。**
```javascript
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
```
### 3. 星座选择器（这里我踩过坑）
表单组件picker支持三种选择器，通过mode来区分，分别是普通选择器，时间选择器，日期选择器，这里我们选择的是普通选择器。**range**是显示的数组，只有声明mode为selector这个才能实现；**value**表示选择的第几个（由0开始）；**bindchange**是触发事件
```html
<view class="userdata-name">星座</view>
      <view class="userdata-symbol"></view>
      <picker mode="selector" class="userdata-input" range="{{actionConItems}}" value="{{conIndex}}" bindchange="pickerConSelected">
           <text>{{actionConItems[conIndex]}}</text>
      </picker>
 </view>      
```
从微信端获取的个人信息放在本地利用wx.setStorageSync("key", '')存储特定的信息，picker到的星座就可以利用这个方法，放到本地。
```javascript
 data: {    
    actionConItems: ['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座'],
    conIndex: 0,
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
```


## 踩过的坑...
1. 开始对文档不熟悉，导致自己走了很多的弯路，例如啊，我做星座选择器的时候就不知道picker这个组件，而去使用了action-sheet，因为action-sheet里面的数据不能超过6项，我们都知道啊有12星座，所以我在这里卡了一段时间，后面详细了看了下文档才解决了问题。所以在你开发小程序时候，你应该对小程序的文档有个详细的了解。<br />
2. 微信小程序的编译包是不能超过2M的，开始你可能不知道将自己的图片放在云端得到API，你尽可能将你的图片压缩小点来，我开发的时候编译包就超过了2M。 <br />
3. 目前小程序还有很多的限制，需要去申请合法的域名等等之类的啊，不过相信后面微信团队会逐渐放开这些限制。<br />
4. 目前我最擅长的也就是切页面，切页面...由于之间不知道弹性布局，页面总显得不那么整齐。**display:flex**[这里有它的详细说明，快来点我哦](http://blog.csdn.net/linda_417/article/details/51507176)这个可以完美解决我的问题，妈妈再也不会担心我的图片文字同时居中了。
5. 作为处女座男生，可能有那么一丢丢的强迫症，就是特别想做的完美，一直在改图片的样式，字体样式...这也有好处，当然坏处也不少╮(╯▽╰)╭<br />

## 项目地址：
https://github.com/wuyuanlijie/iMcDonald-master

## WHO I AM ？
**本人江西财经大学大三学生，热爱前端、喜欢切图、足球keeper、LOL（为了Full Stack，目前不玩了，但是仅仅是目前，哈哈哈）、王者荣耀...目前正在努力coding...为的是秋招<br>** 
## Find ME! 
**WeChat: JerryLeelisa   Email: wuyuanlijie@qq.com**
 
 <br>最后如果您觉得对您学习小程序有帮助的话可以给一个star！谢谢！！！
