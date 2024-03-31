<template>
  <div class="company-profile">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card>
          <img src="@/assets/公司介绍.jpg" alt="公司简介" />
          <div>
            <p>公司简介</p>
            <div class="grid-children__box" v-html="msg"></div>
          </div>
          <nuxt-link class="more" to="/about">了解更多</nuxt-link>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <img src="@/assets/团队介绍.jpg" alt="团队介绍" />
          <div>
            <p>团队介绍</p>
            <div class="grid-children__box" v-html="msg2"></div>
          </div>
          <nuxt-link class="more" to="/about">了解更多</nuxt-link>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <img src="@/assets/公司荣誉.jpg" alt="公司荣誉" />
          <div>
            <p>公司荣誉</p>
            <div class="grid-children__box" v-html="msg3"></div>
          </div>
          <nuxt-link class="more" to="/about">了解更多</nuxt-link>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "&#12288&#12288深圳市共同基金资产管理公司是一家以投资境内、外上市公司股票为主的资产管理公司，是在中国证券投资基金业协会登记注册的私募基金管理公司。<br> \
        &#12288&#12288秉承“价值投资”的投资理念，共同基金的投资常常采用PE股权基金的研究方法。基金经理的投资决定大多基于对公司的基本面分析和...",
      msg2: "&#12288&#12288公司核心投研人员大部分在国内大型金融机构拥有多年的从业经验，研究团队的多名成员具备多年的实体行业经验，对相应产业的发展趋势把握、行业人脉与产业研究等方面拥有较强的优势。知识结构完整、复合型的投研团队是研究质量最为重要的保证。",
      msg3: "&#12288&#12288 2021年私募排排网复合策略收益榜十强 <br> \
        &#12288&#12288 2021年中国私募基金风云榜第十六届量化多头策略十强 <br> \
        &#12288&#12288 2021年方正证券“芳华杯”私募实盘大赛指数增强策略top10 <br> \
        &#12288&#12288 2020年度5年期收益前十名私募先锋榜 <br> \
        &#12288&#12288 2018年格上财富第一季度广深地区第四名 <br> \
        &#12288&#12288 2017年WIND基金股票策略排行榜第十九位 <br> \
        &#12288&#12288 2017华林证券中华好私募粤虎奖 <br> \
      ",
    };
  },
};
</script>

<style scoped>
.company-profile {
  color: white;
  /* font-size: 20px; */
  width: 80%;
  /* display: grid; */
  /* grid-gap: 5px; */
  margin: 0 auto;
}

/* .grid-children {
  margin: 10px auto;
  padding: 32px;
} */

.grid-children__box {
  background-color: #fff;
  opacity: 0.6;
  /* margin: 10px 0; */
  /* overflow-y: hidden; */
  font-size: 10px;
  font-family: 微软雅黑, sans-serif;
  color: rgb(153, 153, 153);
  line-height: 20px;
}

.add {
  height: 276.4px;
}

.children-one {
  background-image: url("@/assets/22.webp");
  background-size: cover;
}

.children-two {
  background-image: url("@/assets/22.webp");
  background-size: cover;
}

.children-three {
  background-image: url("@/assets/22.webp");
  background-size: cover;
}

.intro {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

p {
  margin: 0;
}
.el-card img {
  height: 180px;
  width: 100%;
}
.el-card {
  height: 450px;
}
.el-card div p {
  font-size: 15px;
  font-family: 微软雅黑, sans-serif;
  color: #666666;
  text-align: left;
  margin-left: 15px;
  margin-top: 5px;
  /* margin-bottom: 10px; */
}
.el-card div {
  height: 200px;
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
