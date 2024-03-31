<template>
  <div style="background-color: #f5f5f5; padding-bottom: 50px">
    <div class="topimg"><img src="@/assets/image/active.jpg" alt="" /></div>
    <div></div>
    <div class="team">
      <el-card class="titleBuFen">
        <p>新闻动态</p>
        <p>News Center</p>
      </el-card>
      <Breadcrumb route="新闻动态"></Breadcrumb>
      <div id="newsuolietu">
        <div class="block" v-for="(item, index) in newsList" :key="index">
          <img src="@/assets/default.png" alt="新闻中心左边的图片" />
          <el-row :gutter="20">
            <el-col :span="5">
              <div class="timeplace">
                <span>{{ item.update_at.substring(0, 4) }} </span>
                <br />
                <span>{{ item.update_at.substring(5, 10) }}</span>
              </div>
            </el-col>
            <el-col :span="19">
              <div v-on:click="dianjijinru(item)" class="dianjijinruClass">
                <p class="titlep">{{ item.title }}</p>
                <!-- <p v-html="$options.filters.ellipsis(item.content)"></p> -->
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 底部分页内容 -->
    <el-pagination
      background
      @current-change="handleCurrentChange"
      :current-page="pagination.currentPage"
      :page-size="9"
      layout="prev, pager, next, jumper"
      :total="pagination.total"
    >
    </el-pagination>
  </div>
</template>

<script>
// import "@/plugins/axios";
import BrandGrid from "@/components/BrandGrid.vue";

export default {
  components: { BrandGrid },
  data() {
    return {
      newsList: [
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
      ],
      pagination: {
        currentPage: 1, //分页的当前页
        total: 100, //基金报告的总共数量
      },
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    async getNewsList() {
      // console.log("getNewsList");
      const { data: res } = await this.$http.get("/articles", {
        params: {
          site: "gongtong",
          category: "新闻中心",
          pagenum: this.pagination.currentPage,
          pagesize: 9,
        },
      });
      // console.log(res);
      this.newsList = res.data;
      // this.pagination.total = res.data.length;
      const { data: res2 } = await this.$http.get("/articles/count", {
        params: { site: "gongtong", category: "新闻中心" },
      });
      // console.log(res2.data.nums[0]);
      this.pagination.total = res2.data.nums[0];
    },
    dianjijinru(item) {
      // id = Number(id);
      // console.log(typeof id);
      // console.log("点击进入新闻详情");
      // console.log(item);
      this.$router.push({
        path: "/news/detail", //路由路径
        query: {
          articleId: item.id,
          // item: item,
          // showYear: item.update_at.substring(0, 4),
          // showDay: item.update_at.substring(5, 10),
        }, //路由传参
      });
    },
    // 当前页变动
    async handleCurrentChange(currentPage) {
      this.pagination.currentPage = currentPage;
      // this.pagination.currentPage = currentPage;
      // console.log(this.pagination.currentPage);
      const { data: res } = await this.$http.get("/articles", {
        params: {
          site: "gongtong",
          category: "新闻中心",
          pagenum: this.pagination.currentPage,
          pagesize: 9,
        },
      });
      // console.log(res);
      this.newsList = res.data;
      // console.log(res.data.length);
      this.newsList.forEach((element) => {
        element.update_at_new = element.update_at;
      });
      // console.log(this.pagination.currentPage);
    },
  },
};
</script>
<style scoped>
.timeplace {
  border-width: 1px;
  border-style: solid;
  border-color: #cecaca;
  border-radius: 0px;
  text-align: center;
  margin-top: 20px;
}
.timeplace span:first-child {
  font-family: "Arial Normal", "Arial", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 24px;
  letter-spacing: normal;
  color: rgb(102, 102, 102);
  text-rendering: optimizelegibility;
  font-feature-settings: "kern";
  font-kerning: normal;
  font-size: 18px;
}
.timeplace span:last-child {
  font-family: "Arial Normal", "Arial", sans-serif;
  font-weight: 400;
  color: #999999;
  font-size: 14px;
  text-rendering: optimizelegibility;
  font-feature-settings: "kern";
  font-kerning: normal;
  overflow-wrap: break-word;
  text-transform: none;
  line-height: 24px;
}
.titleBuFen p {
  margin: 0px;
}
.team {
  background-color: #f5f5f5;
  width: 80%;
  /* display: grid; */
  /* grid-gap: 10px; */
  /* margin: 0 auto; */
}
.el-card {
  height: 570px;
  margin-bottom: 20px;
}
.el-col img {
  height: 200px;
  width: 100%;
}
.dingyang p span:first-child {
  font-family: "微软雅黑", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  text-align: left;
  color: #666666;
  vertical-align: none;
}
.dingyang p span:last-child {
  font-family: "微软雅黑", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #999999;
  text-align: left;
  padding-left: 20px;
}
.introduce p span {
  font-family: "微软雅黑", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  color: #999999;
  text-align: left;
  line-height: 24px;
  /* text-indent: 2em; */
}
.titleBuFen {
  /* margin-top: 300px;  */
  z-index: 9999;
  margin-top: -50px;
  height: 70px;
  padding-left: 10px;
}
.titleBuFen p:first-child {
  font-family: 微软雅黑, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  font-size: 16px;
}
.titleBuFen p:last-child {
  font-family: 微软雅黑, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  line-height: 24px;
  color: #999999;
  font-size: 12px;
}

.topimg img {
  height: 450px;
  width: 100%;
}
/* .el-col {
  border-width: 1px;
  border-style: solid;
  border-color: #cecaca;
  border-radius: 0px;
} */
.el-pagination {
  position: relative;
  left: 40%;
  /* align-content: center; */
}
.dianjijinruClass {
  cursor: pointer;
}
.titlep {
  color: rgb(28, 26, 26);
  font-size: 15px;
  text-align: left;
}
.contentp {
  color: rgb(73, 71, 71);
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.block {
  padding: 0.5%;
  width: 32.3%;
  display: inline-block;
  text-align: center;
}
.block img {
  /* margin: 0px auto; */
  /* position: relative; */
  /* transform: translate(-50%, -50%); */
  width: 100%;
  height: 250px;
}
</style>
