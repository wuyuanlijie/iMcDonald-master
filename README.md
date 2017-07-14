# iMcDonald-master   i麦当劳微信小程序（待完善）

## 说明：
    作为全栈的学习者，初学微信小程序，抱着试试做心态，一个星期内初步完成了这个项目。
    
 ### 什么是小程序
     小程序是一种新的开放能力，开发者可以快速地开发一个小程序。小程序可以在微信内被便捷地获取和传播，同时具有出色的使用体验。
 ### 小程序的优势
    1. 用户可便捷地获取服务，无需安装或下载即可使用<br />
    2. 具有更丰富的功能和出色的使用体验<br />
    3. 封装一系列接口能力，帮助快速开发和迭代<br />
 ### 个人感受
     小程序对于新手来说，是很容易上手的，需要你用几天时间去熟悉小程序的构建过程和说明文档，你就可以初步做出一个比较完整的小程序。 我觉得小程序最屌地方还是rpx，使得小程序有很大的兼容性，在页面布局使用这个属性，可以适应不同的手机，这也使得我们降低工作量。而且小程序是一个不需要下载安装即可使用的应用，而且它的背后是强大的微信，所以，如果我们能够用自己的创造思维去看待这个，你会得到很大的收获O(∩_∩)O哈哈~。

## 项目介绍：
 * image — 存放项目图片 
 * pages — 存放项目页面相关文件
 * utils — 存放utils文件，可require引入
 
## 页面注册
    "pages":[
        "pages/index/index",   // 主页<br />
        "pages/happynotice/happynotice",  //开心通告栏<br />
        "pages/userinfo/userinfo",    //个人信息详情<br />
        "pages/queryintegral/queryintegral",  // 积分查询<br />
        "pages/integralmall/integralmall", // 积分商城<br />
        "pages/user/user",  //个人信息<br />
        "pages/integraldetail/integraldetail",   //  优惠券详情<br />
        "pages/qrcodenull/qrcodenull", // 请求注册页面<br />
        "pages/register/register", // 注册信息页面<br />
        "pages/qrcode/qrcode"  //我的二维码<br />
     ], 
 
## 项目功能


## 项目截图
 <img src="https://raw.githubusercontent.com/wuyuanlijie/McDonald-s/master/image/1.png" />


## 踩过的坑
1. 开始对文档不熟悉，导致自己走了很多的弯路，例如啊，我做星座选择器的时候就不知道picker这个组件，而去使用了action-sheet，因为action-sheet里面的数据不能超过6项，我们都知道啊有12星座，所以我在这里卡了一段时间，后面详细了看了下文档才解决了问题。所以在你开发小程序时候，你应该对小程序的文档有个详细的了解。<br />
2. 微信小程序的编译包是不能超过2M的，开始你可能不知道将自己的图片放在云端得到API，你尽可能将你的图片压缩小点来，我开发的时候编译包就超过了2M。 <br />
3. 目前小程序还有很多的限制，需要去申请合法的域名等等之类的啊，不过相信后面微信团队会逐渐放开这些限制。<br />
4. 作为处女座男生，可能有那么一丢丢的强迫症，就是特别想做的完美，一直在改图片的样式，字体样式...这也有好处，当然坏处也不少╮(╯▽╰)╭<br />

## 开发环境：
 微信web开发者工具 v0.19.191100

## 项目地址：
https://github.com/wuyuanlijie/iMcDonald-master

  最后如果您觉得对您学习小程序有帮助的话可以给一个star！谢谢！！！
