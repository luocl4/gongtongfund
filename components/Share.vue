<template>
  <div>
    <i class="iconfont icon-QQ-circle-fill" @click="shareToQQ()"></i>
    <i class="iconfont icon-QQkongjian" @click="shareToRoom()"></i>
    <!-- <i
      class="iconfont icon-weixin1 wxqr"
      @click="shareToWeChat()"
      id="wxqr"
    ></i> -->
    <i class="iconfont icon-weibo" @click="shareToMicroblog()"></i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nowUrl: "",
    };
  },
  props: {
    articleId: {
      type: String,
      default: "0",
    },
  },
  mounted() {
    // console.log(location);
    this.nowUrl = location.pathname + location.search;
    // console.log(this.nowUrl);
    // const oScript = document.createElement("script");
    // oScript.type = "text/javascript";
    // oScript.src =
    //   "http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js";
    // document.body.appendChild(oScript);
  },
  methods: {
    //分享到QQ好友(PC端可用)
    shareToQQ() {
      // console.log(this.articleId);
      //此处分享链接内无法携带图片
      const share = {
        share_url: "https://gongtongfund.com" + this.nowUrl,
      };
      location.replace(
        "https://connect.qq.com/widget/shareqq/index.html?url=" +
          encodeURIComponent(share.share_url)
      );
    },
    //分享到QQ空间(可用)
    shareToRoom() {
      //自定义内容
      const share = {
        share_url: "https://gongtongfund.com" + this.nowUrl,
      };
      // let image_urls = share.image_url.map(function (image) {
      //   return encodeURIComponent(image);
      // });
      //跳转地址
      location.replace(
        "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" +
          encodeURIComponent(share.share_url)
      );
    },
    // shareToWeChat() {
    //   var obj = new WxLogin({
    //     id: "wxqr",
    //     appid: "wxb9e2238ff05c7bd7",
    //     scope: "snsapi_login",
    //     redirect_uri: "https://gongtongfund.com/index.html",
    //     state: "2or3m",
    //     style: "white",
    //   });
    // },
    //分享到微博(可用)
    shareToMicroblog() {
      //自定义内容
      const share = {
        share_url: "https://gongtongfund.com" + this.nowUrl,
      };
      //跳转地址
      location.replace(
        "https://service.weibo.com/share/share.php?url=" +
          encodeURIComponent(share.share_url)
      );
    },
  },
};
</script>
 
<style scoped>
div {
  width: 200%;
  /* padding: -20px; */
  /* z-index: 10000; */
}
.iconfont {
  font-size: 35px;
}
</style>