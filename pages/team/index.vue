<template>
  <div style="background-color: #f5f5f5; padding-bottom: 50px">
    <div class="topimg"><img src="@/assets/image/team.jpg" alt="" /></div>
    <div class="team">
      <el-card class="titleBuFen">
        <div>
          <p style="color: black">精英团队</p>
        </div>
        <div>
          <p>Team</p>
        </div>
      </el-card>
      <Breadcrumb route="精英团队"></Breadcrumb>
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item, index) in teamMemberMsg" :key="index">
          <el-card>
            <img v-bind:src="item.url" />
            <div class="dingyang">
              <p>
                <span>{{ item.name }}</span>
                <span>{{ item.job }}</span>
              </p>
            </div>
            <div class="introduce">
              <p>
                <span>
                  {{ item.troduce }}
                </span>
              </p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb.vue";
export default {
  components: {
    Breadcrumb,
  },
  data() {
    return {
      teamMemberMsg: [
        {
          url: require("@/assets/image/6.jpg"),
          name: "丁洋",
          job: "董事长、投资总监",
          troduce:
            "中国第一代阳光私募基金经理，人大私募基金立法小组顾问，2015、2016年两届私募基金实盘大赛冠军。素以见解独到、行动果敢著称。独创股市黑客理论，多次精准预测股市大顶和大底。 清华、北大、浙大等高校《市值管理》、《操盘智慧》课程教授，风格清新生动，以其独到视野，深受好评。",
        },
        {
          url: require("@/assets/default.png"),
          name: "谭鹏飞",
          job: "董事、总经理",
          troduce:
            "南开大学金融学硕士。先后主导参与岳阳林纸、三星医疗等大牛股价值管理顾问。恒大高新（002591），金证股份（600446），新纶科技（002341）等上市公司大额定增或二级市场投资，拥有丰富的证券投资管理、投资银行经验。",
        },
        {
          url: require("@/assets/default.png"),
          name: "李伟强",
          job: "合伙人",
          troduce:
            "美国加州大学洛杉矶分校工商管理硕士，美国宾州州立大学政府管理硕士和法国文学硕士。曾任摩根士丹利纽约、新加坡、香港等地投资顾问、副总裁，花旗环球金融亚洲有限公司高级副总裁。长盛基金独立董事。",
        },
        {
          url: require("@/assets/default.png"),
          name: "龚坤林",
          job: "投资副总",
          troduce:
            "市场经验28年，运作资金20亿以上，多次挖掘市场龙头，多次规避股灾，收益稳健，负责基金穿越股灾，2015到2018年上半年三年绝对收益42%。",
        },
        {
          url: require("@/assets/default.png"),
          name: "章景轩",
          job: "基金经理",
          troduce:
            "香港浸会大学硕士，基本面研究功底扎实，证券市场政策前瞻性强，善于挖掘基本面逆转的长线牛股。",
        },
      ],
    };
  },
};
</script>

<style >
.titleBuFen p {
  margin: 0px;
}
.team {
  background-color: #f5f5f5;
  width: 80%;
  display: grid;
  /* grid-gap: 10px; */
  margin: 0 auto;
}
.el-card {
  /* text-align: center; */
  height: 540px;
  margin-bottom: 20px;
  /* padding: 0 auto; */
}
.el-card img {
  /* display: table; */
  position: relative;
  left: 0%;
  /* background-position: center center; */
  height: 275px;
  width: 100%;
}
.dingyang p span:first-child {
  font-family: "微软雅黑", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
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
  font-size: 8px;
  color: #999999;
  text-align: left;
  line-height: 20px;
  /* text-indent: 2em; */
}
.titleBuFen {
  /* margin-top: 300px; */
  z-index: 9999;
  margin-top: -50px;
  height: 70px;
  padding-left: 10px;
}
.titleBuFen div :first-child p {
  font-family: 微软雅黑, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  font-size: 16px;
}
.titleBuFen div :last-child p {
  font-family: 微软雅黑, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  line-height: 24px;
  color: #999999;
  font-size: 12px;
}

.topimg img {
  height: 500px;
  width: 100%;
}
</style>