<template>
  <div>
    <div style="height: 350px">
      <!-- <img
        src="https://dyapi.dingyang.net/public/files/images/1-1.png"
        style="width: 100%; height: 300px"
      />这张图片打不开，改成放静态的轮播图 -->
      <!-- 第一种方案，利用element现场的走马灯组件 -->
      <div class="carousel" style="height: 30vw; margin-top: 80px">
        <el-carousel :interval="4000" type="card" height="20vw" trigger="click">
          <el-carousel-item v-for="(item, index) in urls" :key="index">
            <img v-bind:src="item.url" style="width: 100%; height: 100%" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 第二种方案，自定义轮播图组件，准备自己写一个组件 -->
    </div>
    <div class="dynamic-box"></div>
    <BaseDivider
      titleChinese="公司概况"
      titleEnglish="Company Profile"
    ></BaseDivider>
    <ProfileGrid />
    <BrandGrid />
    <BaseDivider
      style="background-color: white"
      titleChinese="新闻中心"
      titleEnglish="News Center"
    ></BaseDivider>
    <NewsGrid />
    <BaseDivider
      style="background-color: #f5f5f5"
      titleChinese="精英团队"
      titleEnglish="Team"
    ></BaseDivider>
    <Team />
    <div class="footer__header">
      <p><b>联系我们</b> Contact us</p>
    </div>
    <el-row>
      <div class="container">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="container-left pweizhi">
            <p class="gewai" style="color: rgb(102, 102, 102)">
              深圳市共同基金管理有限公司
            </p>
            <p style="color: rgb(153, 153, 153)">
              地址：深圳市福田区香蜜湖街道求是大厦西座2701室
              <br />
              <br />
              邮编：518000
              <br /><br />
              电话：186-7550-0258
              <br /><br />
              邮箱：szgtjj2020526@163.com
            </p>
          </div>
          <div class="guanfangweixin">
            <img src="@/assets/wechat-name.png" alt="官方微信" />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="container-right">
            <Map></Map>
          </div>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
import ProfileGrid from "@/components/ProfileGrid.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import NewsGrid from "@/components/NewsGrid.vue";
import BrandGrid from "@/components/BrandGrid.vue";
import Team from "@/components/TeamGrid.vue";
import Map from "@/components/MapGongTong.vue";

export default {
  components: {
    ProfileGrid,
    BaseDivider,
    NewsGrid,
    BrandGrid,
    Team,
    Map,
  },
  data() {
    return {
      urls: [
        { url: require("../assets/image/1.jpg") },
        { url: require("../assets/image/2.jpg") },
        { url: require("../assets/image/3.jpg") },
        { url: require("../assets/image/4.jpg") },
        { url: require("../assets/image/5.jpg") },
      ],
    };
  },
};
</script>

<style scoped>
.dynamic-box {
  font-size: 32px;
  background-color: #f5f5f5;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.carousel {
  padding-top: 40px;
}
/* .footer {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  bottom: 0;
  width: 100%;
  font-family: PingFang SC;
} */

.footer p {
  margin: 0;
  padding: 10px 0 0 0;
}

.footer__header {
  padding: 15px 80px;
}

.container {
  padding-left: 100px;
  font-size: 13px;
  flex-direction: row;
  word-wrap: break-word;
}

.container-left {
  margin-bottom: 30px;
}

.guanfangweixin img {
  width: 120px;
  height: 144px;
  margin-left: 40%;
}
b {
  font-size: 22px;
}
.pweizhi {
  margin-left: 10px;
  margin-top: 10px;
}
.gewai {
  margin-left: 15px !important;
}
.container-right {
  /* margin-top: 25px; */
  margin-left: -40px;
  /* margin-top: -60px; */
  /* text-align: center; */
}
</style>
