<template>
  <div style="background-color: white; padding-bottom: 20px">
    <div class="news">
      <el-row :gutter="13">
        <el-col :span="14">
          <img src="@/assets/新闻中心.jpg" alt="新闻中心左边的图片" />
          <p class="titlep">{{ newsList[0].title }}</p>
          <el-row v-if="newsList.length >= 1">
            <el-col :span="6">
              <el-divider direction="vertical"></el-divider>
              <span>{{ newsList[0].update_at.substring(0, 10) }}</span>
              <el-divider direction="vertical"></el-divider>
            </el-col>
            <el-col :span="18">
              <p
                class="contentp"
                v-html="$options.filters.ellipsis(newsList[0].content)"
              ></p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="10">
          <el-divider class="top" v-if="newsList.length >= 2"></el-divider>
          <el-row v-if="newsList.length >= 2">
            <el-col :span="8">
              <el-divider direction="vertical"></el-divider>
              <span>{{ newsList[1].update_at.substring(0, 10) }}</span>
              <el-divider direction="vertical"></el-divider>
            </el-col>
            <el-col :span="16">
              <p class="contentp">
                {{ newsList[1].title }}
              </p>
            </el-col>
          </el-row>
          <el-divider class="top" v-if="newsList.length >= 3"></el-divider>
          <el-row v-if="newsList.length >= 3">
            <el-col :span="8">
              <el-divider direction="vertical"></el-divider>
              <span>{{ newsList[2].update_at.substring(0, 10) }}</span>
              <el-divider direction="vertical"></el-divider>
            </el-col>
            <el-col :span="16">
              <p class="contentp">
                {{ newsList[2].title }}
              </p>
            </el-col>
          </el-row>
          <el-divider class="top" v-if="newsList.length >= 4"></el-divider>
          <el-row v-if="newsList.length >= 4">
            <el-col :span="8">
              <el-divider direction="vertical"></el-divider>
              <span>{{ newsList[3].update_at.substring(0, 10) }}</span>
              <el-divider direction="vertical"></el-divider>
            </el-col>
            <el-col :span="16">
              <p class="contentp">
                {{ newsList[3].title }}
              </p>
            </el-col>
          </el-row>
          <el-divider class="top"></el-divider>
          <nuxt-link class="more" to="/news">了解更多</nuxt-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
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
          pagenum: 1,
          pagesize: 4,
        },
      });
      console.log(res);
      this.newsList = res.data;
      // console.log(this.newsList);
      // this.pagination.total = res.data.length;
      // const { data: res2 } = await this.$http.get("/articles/count", {
      // params: { site: "gongtong", category: "新闻中心" },
      // });
      // console.log(res2);
      // this.pagination.total = res2.data.nums[0];
    },
  },
  filters: {
    //当渲染的文字超出9字后显示省略号
    ellipsis(value) {
      value = value.replace(/<.*?>/gi, ""); //把v-html的格式标签替换掉
      var cnPattern = /[\u4E00-\u9FA5]/g;
      value = value.match(cnPattern);
      value = value.join("");
      // console.log(str);
      console.log(value);
      if (value.length > 40) {
        return value.slice(0, 40) + "...";
      } else {
        return value;
      }
    },
  },
};
</script>

<style scoped>
.news {
  background-color: white;
  width: 80%;
  display: grid;
  grid-gap: 10px;
  margin: 0 auto;
}
.el-col img {
  width: 550px;
  height: 275px;
}
.el-col p {
  text-align: center;
}
.titlep {
  font-family: 微软雅黑, sans-serif;
  /* font-weight: 400; */
  /* font-style: normal; */
  font-size: 16px;
  /* line-height: 24px; */
}
.contentp {
  font-family: 微软雅黑, sans-serif;
  font-weight: 400;
  /* font-style: normal; */
  /* padding-top: -10px; */
  margin-top: 0px;
  font-size: 14px;
  text-align: left !important;
  line-height: 18px;
}
.top {
  position: relative;
  top: -15px;
}
.more {
  border: 1px solid rgb(223, 219, 219);
  font-family: 微软雅黑, sans-serif;
  font-style: normal;
  font-size: 12px;
  color: rgb(153, 153, 153);
  position: relative;
  right: -75%;
  bottom: -5px;
  border-radius: 2px;
  text-decoration: none;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>