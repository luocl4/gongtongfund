<template>
  <div style="background-color: #f5f5f5; padding-bottom: 50px">
    <div class="topimg"><img src="@/assets/image/about.jpg" alt="" /></div>
    <div></div>
    <div class="team">
      <el-card class="titleBuFen">
        <p>关于我们</p>
        <p>About US</p>
      </el-card>
      <Breadcrumb route="关于我们"></Breadcrumb>
      <div class="box1-card">
        <div class="card">
          <h3 class="card-sub-text" style="margin: 20px 0">
            {{ subText }}
          </h3>
          <div class="card-main-text" v-html="msg"></div>
          <h3 class="card-sub-text" style="margin: 20px 0">{{ subText2 }}</h3>
          <div class="card-main-text" v-html="msg2"></div>
          <h3 class="card-sub-text" style="margin: 20px 0">{{ subText3 }}</h3>
          <div class="card-main-text" v-html="msg3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
 * Description 这个就是关于界面里的内容，由于没有后端api提供，只能写死在前端页面里，客户说这个基本上不怎么改
 * Author 赵奇
 * Date 2022/06/01
 */
export default {
  name: "ComparIntro",
  data() {
    return {
      subText: "公司简介",
      msg: "&#12288&#12288深圳市共同基金资产管理公司是一家以投资境内、外上市公司股票为主的资产管理公司，是在中国证券投资基金业协会登记注册的私募基金管理公司。<br> \
            &#12288&#12288秉承“价值投资”的投资理念，共同基金的投资常常采用PE股权基金的研究方法。基金经理的投资决定大多基于对公司的基本面分析和股票估值。对公司进行估值的时候，共同基金注重的是其行业结构和公司在产业价值链中的地位，偏好进入门槛较高、与供应商和客户谈判能力强, 并且管理层积极向上且富有能力的公司。这些考虑是共同基金做投资决定和估值过程中的核心。<br> \
            &#12288&#12288另外，共同基金还在不同行业都有研究专家，这些行业专家对于行业和公司的理解很大程度上都要深于大多数金融机构的研究员，因此可以更清楚地了解各行业的最新变化。在中国经济高速增长的阶段，行业及监管政策也在不断变化，企业运作环境变化的速度比发达国家快得多。为此共同基金相信自己有得天独厚的优势去深入了解不同行业的环境、进入门槛、竞争优势和管理能力。也正是这一优势让共同基金区别于许多其他的基金管理公司。<br>\
            &#12288&#12288同时, 共同基金还进行全面的宏观经济及市场分析来把握市场环境和投资时机。<br>\
            &#12288&#12288共同基金所管理的基金均给投资人创造了丰厚的长期回报。历年来，“投资快报”、”南方传媒”等知名财经媒体均对共同基金的优秀业绩和策略进行过详细报道。<br>\
            &#12288&#12288长期以来，共同基金为投资人创造了丰厚回报。展望未来,共同将继续努力为投资者寻求长期资本增值，致力于成为一家在国际国内业绩优秀、值得信赖、受人尊敬的资产管理公司。<br> ",
      subText2: "投资团队简介",
      msg2: "&#12288&#12288公司核心投研人员大部分在国内大型金融机构拥有多年的从业经验，研究团队的多名成员具备多年的实体行业经验，对相应产业的发展趋势把握、行业人脉与产业研究等方面拥有较强的优势。知识结构完整、复合型的投研团队是研究质量最为重要的保证。<br> \
      <h4>丁洋 董事长、投资总监 </h4> \
      &#12288&#12288中国第一代阳光私募基金经理，人大私募基金立法小组顾问，2015、2016年两届私募基金实盘大赛冠军。 <br> \
      &#12288&#12288素以见解独到、行动果敢著称。独创股市黑客理论，多次精准预测股市大顶和大底。 <br> \
      &#12288&#12288清华、北大、浙大等高校《市值管理》、《操盘智慧》课程教授，风格清新生动，以其独到视野，深受好评。 <br> \
      <h4>谭鹏飞 董事、总经理</h4> \
      &#12288&#12288南开大学金融学硕士。先后主导参与岳阳林纸、三星医疗等大牛股价值管理顾问。恒大高新（002591），金证股份（600446），新纶科技（002341）等上市公司大额定增或二级市场投资，拥有丰富的证券投资管理、投资银行经验。<br> \
      <h4>李伟强 合伙人 </h4> \
      &#12288&#12288美国加州大学洛杉矶分校工商管理硕士，美国宾州州立大学政府管理硕士和法国文学硕士。曾任摩根士丹利纽约、新加坡、香港等地投资顾问、副总裁，花旗环球金融亚洲有限公司高级副总裁。长盛基金独立董事。<br> \
      <h4>龚坤林 投资副总</h4> \
      &#12288&#12288市场经验28年，运作资金20亿以上，多次挖掘市场龙头，多次规避股灾，收益稳健，负责基金穿越股灾，2015到2018年上半年三年绝对收益42%。 <br>\
      <h4>章景轩 基金经理</h4> \
      &#12288&#12288香港浸会大学硕士，基本面研究功底扎实，证券市场政策前瞻性强，善于挖掘基本面逆转的长线牛股。 <br> <br>\
      ",
      subText3: "公司荣誉",
      msg3: "&#12288&#12288 2021年私募排排网复合策略收益榜十强 <br>\
      &#12288&#12288 2021年中国私募基金风云榜第十六届量化多头策略十强 <br>\
      &#12288&#12288 2021年方正证券“芳华杯”私募实盘大赛指数增强策略top10 <br>\
      &#12288&#12288 2020年度5年期收益前十名私募先锋榜 <br>\
      &#12288&#12288 2018年格上财富第一季度广深地区第四名 <br>\
      &#12288&#12288 2017年WIND基金股票策略排行榜第十九位 <br>\
      &#12288&#12288 2017华林证券中华好私募粤虎奖 <br>\
      &#12288&#12288 2015年私募排排网年度收益冠军 <br>\
      &#12288&#12288 2015年私募排排网年度收益冠军 <br>\
      &#12288&#12288 2015年私募排排年度收益率全国排名第八，广深排名第五 <br>\
      &#12288&#12288 2016年私募排排网股票策略收益榜第一名 <br>\
      ",
    };
  },
};
</script>

<style>
.box1 {
  display: flex;
  margin: 0 auto;
  width: 88%;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 3%;
  flex-direction: column;
  max-height: none;
  overflow-y: hidden;
}
.box1-img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-height: 100px;
}
.card-img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-height: 350px;
  overflow: hidden;
}
.img1-main {
  height: 120%;
  width: 100%;
}
.card {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 40px;
  background: #ffffff;
  font-family: PingFang SC;
  font-size: 16px;
  font-weight: 300;
}
.title {
  margin: 20px 0;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 4px solid #97b9ff;
}
.title h2 {
  margin: 0;
  padding: 0;
}
.card-main-text {
  letter-spacing: 0.1em;
  color: #333333;
  margin-bottom: 14px;
}

.card-sub-text {
  letter-spacing: 0.04em;
  text-align: left;
  color: #666666;
  margin-bottom: 10px;
}
</style>
