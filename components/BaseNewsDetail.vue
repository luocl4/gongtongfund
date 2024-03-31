<template>
  <div class="whole">
    <div style="padding-bottom: 50px; width: 80%">
      <!-- 面包屑部分 -->
      <el-row>
        <!-- 新闻正文部分 -->
        <el-col :span="18">
          <el-row>
            <el-col :span="3">
              <div class="timeplace">
                <span>{{ news.showYear }} </span>
                <br />
                <span>{{ news.showDay }} </span>
              </div>
              <!-- 打印 -->
              <div class="dayinAndFenxxiang" @click="printfee">
                <i class="iconfont icon-dayinji_o"></i>
                <br />
                <span>打印</span>
              </div>
              <!-- 分享 -->
              <div
                class="dayinAndFenxxiang"
                @mouseenter="mouseEnter"
                @mouseleave="mouseLeave"
              >
                <i class="iconfont icon-fenxiang"> </i>
                <br />
                <span>
                  <p>分享</p>
                  <share
                    v-show="showshare"
                    class="share"
                    :articleId="this.news.id"
                  ></share>
                </span>
              </div>
            </el-col>
            <el-col :span="21" id="exportableTable">
              <div class="title">{{ news.title }}</div>
              <el-divider></el-divider>
              <div class="content" v-html="news.content"></div>
              <nuxt-link class="more" to="/news" v-if="comeRoute == 'news'"
                >返回</nuxt-link
              >
              <nuxt-link class="more" to="/fund" v-if="comeRoute == 'fund'"
                >返回</nuxt-link
              >
            </el-col>
          </el-row>
        </el-col>
        <!-- 相关热点推荐部分 -->
        <el-col :span="6" class="hot">
          <p id="hotTitle">热点推荐</p>
          <ul id="hotUl">
            <li
              id="hotLi"
              v-for="(item, index) in news_hot"
              :key="index"
              @click="dianjijinru(item)"
            >
              <!-- <p v-bind="$options.filters.ellipsis(item.title)"></p> -->
              {{ index + 1 }}.{{ $options.filters.ellipsis(item.title) }}
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import share from "../components/Share.vue";
export default {
  components: { share },
  data() {
    return {
      news: {
        id: "0",
        update_at: "2015-02-04",
        title: "《黑金石天蓝基金》成立公告",
        content:
          "尊敬的投资者：<br /> 我公司作为管理人，发起设立的《黑金石天蓝基金》，基金编码S22988，由招商证券托管，于2015年2月3日募集结束，2月4日正式成立。特此公告。<br />深圳市华银精治资产管理有限公司<br />2015年2月4日",
        create_at: "2022-10-11T11:02:37.415Z",
        update_at: "2022-10-11T11:02:37.415Z",
      },
      news_hot: [
        {
          id: 12,
          site: "all",
          title: "测试文章1",
          description: "还没有描述",
          category: "今日预测",
          create_at: "2022-10-11T11:02:37.415Z",
          update_at: "2022-10-11T11:02:37.415Z",
          content: "这是一篇测试文章。",
        },
      ], //热点推荐的结构体
      showshare: false,
    };
  },
  props: {
    articleId: {
      type: String,
      default: "0",
    },
    comeRoute: {
      type: String,
      default: "",
    },
  },
  computed: {},
  // beforeRouteEnter(to, from, next) {
  //   console.log(to, from, "bjhhhhhhh"); // 可以拿到 from， 知道上一个路由是什么，从而进行判断
  //   //在next中写处理函数
  // },
  // beforeRouteEnter(a, b, c) {
  //   console.log(a, b, c);
  // },
  created() {
    // console.log(this.item);
    this.news.id = this.articleId;
    // console.log(this.news.id);
    this.getArticle();
    // this.news.update_at_year = this.news.update_at;
    // this.news.update_at_day = this.news.update_at;

    // console.log(this.news);
    // this.route = this.comeRoute;
    // console.log(this.comeRoute);
    this.getNewsHot();
  },
  mounted() {},
  methods: {
    async getArticle() {
      // console.log("getArticle");
      var id = this.news.id;
      // console.log(id);
      const { data: res } = await this.$http.get(`/articles/${id}`);
      // console.log(res);
      this.news = res.data;
      this.news.showYear = this.news.update_at.substring(0, 4);
      this.news.showDay = this.news.update_at.substring(5, 10);
    },
    async getNewsHot() {
      // console.log("getNewsHot");
      // console.log(this.news_hot);
      const { data: res } = await this.$http.get("/articles", {
        params: { site: "gongtong", pagesize: 8, category: "新闻中心" },
      });
      this.news_hot = res.data;
      // console.log(res);
    },
    // 打印功能
    printfee() {
      const printContent = document.getElementById("exportableTable");
      // window.open() 弹出窗口
      const WindowPrt = window.open(
        "",
        "",
        "left=500px,top=500px,width=900,height=900,toolbar=0,scrollbars=0,status=0"
      ); //弹出一个空的窗口（设置好宽高）
      // write()方法用于写入文档内容，可以传多个参数，写入的字符串会按HTML解析
      WindowPrt.document.write(printContent.innerHTML);
      // 运行document.write()，运行完后，最好手动关闭文档写入document.close()
      WindowPrt.document.close();
      //方法将焦点设置到当前窗口，也就是将窗口显示在前（靠近屏幕）
      WindowPrt.focus();
      // 调用 print() 方法会产生一个打印预览弹框，让用户可以设置打印请求。
      WindowPrt.print();
      // window.close()关闭浏览器窗口
      WindowPrt.close();
    },
    mouseEnter() {
      this.showshare = true;
      // console.log(this.share);
    },
    mouseLeave() {
      this.showshare = false;
      // console.log(this.share);
    },
    dianjijinru(item) {
      // id = Number(id);
      // console.log(typeof id);
      // console.log(item);
      // location.reload();
      this.$router.push({
        path: "/hot/" + item.id, //路由路径
        query: {
          articleId: item.id,
          // showYear: item.update_at.substring(0, 4),
          // showDay: item.update_at.substring(5, 10),
        }, //路由传参
      });
    },
  },
  filters: {
    //当渲染的文字超出9字后显示省略号
    ellipsis(value) {
      // var cnPattern = /[\u4E00-\u9FA5]/g;
      // value = value.match(cnPattern);
      // console.log(value.id, value.content);
      // var str = value.join("");
      // console.log(str);
      // value = value.replace(/<.*?>/gi, ""); //把v-html的格式标签替换掉
      if (value.length > 20) {
        return value.slice(0, 20) + "...";
      } else {
        return value;
      }
    },
  },
};
</script>

<style scoped>
.whole {
  display: flex;
  justify-content: center;
  min-height: 341px;
}
.el-breadcrumb {
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: 微软雅黑, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  text-align: left;
  line-height: 28px;
}
.content {
  font-family: 微软雅黑, sans-serif;
  /* font-weight: 400; */
  /* font-style: normal; */
  color: rgb(153, 153, 153);
  text-align: left;
  font-size: 14px;
  /* line-height: 32px; */
}
.title {
  font-family: "微软雅黑 Bold", 微软雅黑, sans-serif;
  font-style: normal;
  text-align: left;
  /* line-height: 18px; */
}
.timeplace {
  width: 60%;
  border-width: 1px;
  border-style: solid;
  border-color: #cecaca;
  border-radius: 0px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}
.timeplace span:first-child {
  font-family: "Arial Normal", "Arial", sans-serif;
  /* font-weight: 400; */
  /* font-style: normal; */
  /* line-height: 20px; */
  /* letter-spacing: normal; */
  color: rgb(102, 102, 102);
  /* text-rendering: optimizelegibility; */
  /* font-feature-settings: "kern"; */
  /* font-kerning: normal; */
  font-size: 20px;
  /* padding-top: 50px; */
}
.timeplace span:last-child {
  font-family: "Arial Normal", "Arial", sans-serif;
  /* font-weight: 400; */
  color: #999999;
  font-size: 14px;
  /* text-rendering: optimizelegibility; */
  /* font-feature-settings: "kern"; */
  /* font-kerning: normal; */
  /* overflow-wrap: break-word; */
  /* text-transform: none; */
  /* line-height: 20px; */
}
.dayinAndFenxxiang {
  margin-top: 10px;
  padding-left: 10px;
}
.dayinAndFenxxiang i {
  font-size: 28px;
  font-family: FontAwesome, sans-serif;
  /* font-weight: 400; */
  color: rgb(204, 204, 204);
  /* font-style: normal; */
}
.dayinAndFenxxiang span {
  font-family: 微软雅黑, sans-serif;
  /* font-weight: 400; */
  color: rgb(153, 153, 153);
  font-size: 14px;
}
.more {
  border: 1px solid rgb(223, 219, 219);
  font-family: 微软雅黑, sans-serif;
  font-style: normal;
  font-size: 12px;
  color: rgb(153, 153, 153);
  position: relative;
  right: -90%;
  bottom: -5px;
  border-radius: 2px;
  text-decoration: none;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
}
/* .hot {
  margin-left: -8px;
} */
.hot li {
  width: 500px;
  list-style-type: none;
  /* height: 40px; */
  /* margin-left: -20px; */
  /* line-height: 20px; */
}
.dayinAndFenxxiang {
  cursor: pointer;
}
.share {
  position: relative;
  left: -50%;
}
#hotTitle {
  font-family: 微软雅黑, sans-serif;
  /* font-weight: 400; */
  /* font-style: normal; */
  color: rgb(153, 153, 153);
  text-align: left;
  /* line-height: 28px; */
  font-size: 18px;
}
#hotLi {
  font-size: 12px;
  color: rgb(78, 76, 76);
  cursor: pointer;
}
</style>