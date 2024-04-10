<template>
  <div style="background-color: #f5f5f5; padding-bottom: 50px">
    <div class="topimg"><img src="@/assets/image/fund.jpg" alt="" /></div>
    <div></div>
    <div class="team">
      <el-card class="titleBuFen">
        <p>基金报告</p>
        <p>Fund Information</p>
      </el-card>
      <Breadcrumb route="基金报告"></Breadcrumb>
      <!-- 具体基金报告部分内容 -->
      <div class="fundInformation">
        <ul>
          <li v-for="(item, index) in fundList" :key="index">
            <div v-on:click="dianjijinru(item)" class="dianjijinruClass">
              <el-row>
                <el-col :span="19" id="titleN">{{ index + 1 }}.{{ item.title }}</el-col>
                <el-col :span="5" id="titleN">{{
            item.update_at.substring(0, 10)
          }}</el-col>
              </el-row>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 底部分页内容 -->
    <el-pagination background @current-change="handleCurrentChange" :current-page="pagination.currentPage"
      :page-size="10" layout="prev, pager, next, jumper" :total="pagination.total">
    </el-pagination>
  </div>
</template>

<script>
import bus from "@/utils/bus.js";
// import "@/plugins/axios.js";

export default {
  components: {
    bus,
  },
  data() {
    return {
      fundList: [
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
    this.getFundList();
  },
  methods: {
    async getFundList() {
      // console.log("getFundList");
      const { data: res } = await this.$http.get("/articles", {
        params: {
          site: "gongtong",
          category: "基金报告",
          pagenum: this.pagination.currentPage,
          pagesize: 10,
        },
      });
      // console.log(res);
      this.fundList = res.data;
      // console.log(res.data.length);
      this.fundList.forEach((element) => {
        element.update_at_new = element.update_at;
      });
      const { data: res2 } = await this.$http.get("/articles/count", {
        params: { site: "gongtong", category: "基金报告" },
      });
      // console.log(res2);
      this.pagination.total = res2.data.nums[0];
      // this.$axios
      //   .get("/articles")
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });
    },
    dianjijinru(item) {
      // id = Number(id);
      // console.log(typeof id);
      // console.log("点击进入新闻详情");
      // console.log(item);
      this.$router.push({
        path: "/fund/detail", //路由路径
        query: {
          articleId: id,
          // showYear: item.update_at.substring(0, 4),
          // showDay: item.update_at.substring(5, 10),
        }, //路由传参
      });
    },
    // 当前页变动
    async handleCurrentChange(currentPage) {
      this.pagination.currentPage = currentPage;
      // console.log(this.pagination.currentPage);
      const { data: res } = await this.$http.get("/articles", {
        params: {
          site: "gongtong",
          category: "基金报告",
          pagenum: this.pagination.currentPage,
          pagesize: 10,
        },
      });
      // console.log(res);
      this.fundList = res.data;
      // console.log(res.data.length);
      this.fundList.forEach((element) => {
        element.update_at_new = element.update_at;
      });
      // console.log(this.pagination.currentPage);
    },
  },
};
</script>

<style>
.topimg img {
  height: 400px !important;
}

.el-card__body {
  padding: 13px !important;
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

.text {
  font-size: 20px;
  color: white;
}

.list-title {
  color: #fff;
  margin-bottom: 20px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 4px solid #97b9ff;
}

.list-title h2 {
  color: #fff;
  margin: 0;
  padding: 0;
}

.item {
  margin-top: 30px;
}

.text a {
  text-decoration: none;
  color: #ffffff;
  font-family: PingFang SC;
  font-size: 18px;
  font-weight: 300;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

#box-cardx {
  /* text-align: center; */
  width: 70%;
  min-height: 600px;
  margin: 20px auto;
  background-color: rgba(0, 0, 0, 0.7);
  position: relative;
  /* margin-top: -100px; */
  /* margin-left: 100px; */
  margin: 0 auto;
  z-index: 9999;
}

.control-center {
  text-align: center;
}

.el-pagination {
  margin-top: 10px;
  margin-bottom: 0px;
  /* margin: 20px auto; */
  font-family: PingFang SC;
  font-size: 14px;
  font-weight: 400;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  /*当前选中页数的样式进行修改*/
  background-color: #97b9ff;
  color: #fff;
}

.el-pagination {
  position: relative;
  left: 40%;
  align-content: center;
}

.fundInformation ul li {
  height: 40px;
}

.fundInformation ul {
  list-style-type: none;
}

#titleN {
  /* font-size: 19px; */
  text-align: left;
  font-family: "Arial Normal", "Arial", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #666666;
}

.dianjijinruClass {
  cursor: pointer;
}
</style>
