<template>
  <div style="background-color: rgba(153, 153, 153, 1); padding-bottom: 10px">
    <div class="aboutus">
      <!-- 顶部几个大大的数字区域 -->
      <el-row class="topnumber" style="margin-left: 5px">
        <el-col :span="5" class="text">
          <p style="font-size: 40px">
            <span>2015</span><span style="font-size: 14px">年</span>
          </p>
          <p style="font-size: 12px"><span>公司成立时间</span></p>
        </el-col>
        <el-col :span="1">
          <el-divider direction="vertical" class="elDivider"></el-divider>
        </el-col>
        <el-col :span="5" class="text">
          <p style="font-size: 40px">
            <span>10000</span><span style="font-size: 14px">万元</span>
          </p>
          <p style="font-size: 12px"><span>注册资本</span></p>
        </el-col>
        <el-col :span="1">
          <el-divider direction="vertical" class="elDivider"></el-divider>
        </el-col>
        <!-- <el-col><el-divider direction="vertical"></el-divider></el-col> -->
        <el-col :span="5" class="text">
          <p style="font-size: 40px">
            <span>12</span><span style="font-size: 14px">只</span>
          </p>
          <p style="font-size: 12px"><span>管理基金</span></p>
        </el-col>
        <el-col :span="1">
          <el-divider direction="vertical" class="elDivider"></el-divider>
        </el-col>
        <!-- <el-col><el-divider direction="vertical"></el-divider></el-col> -->
        <el-col :span="5" class="text">
          <p style="font-size: 40px">
            <span>91.67</span><span style="font-size: 14px">%</span>
          </p>
          <p style="font-size: 12px"><span>产品盈利占比</span></p>
        </el-col>
      </el-row>
      <el-card>
        <el-row>
          <el-col :span="6">
            <img src="@/assets/品牌故事.jpg" alt="品牌故事" />
          </el-col>
          <el-col :span="18">
            <span>
              <p>品牌故事</p>
              <p>About US</p>
              <p>
                深圳市共同基金资产管理公司是一家以投资境内、外上市公司股票为主的资产管理公司，是在中国证券投资基金业协会登记注册的私募基金管理公司。
                <br />　　
                秉承“价值投资”的投资理念，共同基金的投资常常采用PE股权基金的研究方法。基金经理的投资决定大多基于对公司的基本面分析和股票估值。对公司进行估值的时候，共同基金注重的是其行业结构和公司在产业价值链中的地位，偏好进入门槛较高、与供应商和客户谈判能力强,
                并且管理层积极向上且富有能力的公司。这些考虑是共同基金做投资决定和估值过程中的核心。
              </p>
            </span>
            <nuxt-link class="more" to="/about">了解更多</nuxt-link>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.aboutus {
  background-color: rgba(153, 153, 153, 1);
  width: 80%;
  display: grid;
  /* grid-gap: 10px; */
  margin: 0 auto;
  /* height: 700px; */
}
.topnumber {
  text-align: center;
}
.el-card {
  height: 330px !important;
}
ul {
  margin-left: 10%;
}
/* span {
  font-family: 微软雅黑, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: rgb(255, 255, 255);
  line-height: 36px;
  width: 240px;
} */
li {
  list-style-type: none;
  float: left;
}
/* .el-divider--vertical {
  width: 1px;
  height: 50px;
  margin-top: 60px;
  margin: 30px 60px;
} */
.el-card img {
  padding: 5px;
  width: 100%;
  height: 250px;
}
.el-col span p {
  margin: 10px;
  padding-left: 50px;
  padding-right: 20px;
  font-family: "微软雅黑", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  color: #999999;
  line-height: 24px;
  font-size: 14px;
}
.el-col span p:first-child {
  font-size: 18px;
  color: #666666;
}
.el-col span p:last-child {
  margin-top: 20px;
  text-indent: 2em;
  font-size: 14px;
  font-family: "微软雅黑", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #999999;
  text-align: left;
  line-height: 28px;
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
.elDivider {
  margin-top: 50px;
  height: 50px;
}
</style>