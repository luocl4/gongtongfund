<template>
  <div style="background-color: #f5f5f5; padding-bottom: 0px">
    <div class="team">
      <el-card>
        <el-row>
          <el-col :span="7">
            <img src="@/assets/image/6.jpg" alt="丁洋" />
          </el-col>
          <el-col :span="17">
            <div class="dingyang">
              <p><span>丁洋</span><span>董事长、投资总监</span></p>
            </div>
            <div class="introduce">
              <p>
                中国第一代阳光私募基金经理，人大私募基金立法小组专家，深圳华银精治资产管理公司董事长兼投资总监，成功运作多家上市公司市值管理、大宗交易、增发股改等项目。
              </p>
              <p>个人成就:</p>
              <p>
                1.2016、2015年全国阳光私募冠军
                <br />
                2.曾任深国投华银信托基金经理，新时代信托基金经理，基金业绩排名同行前列
                <br />
                3.著有《短线手筋-股市黑客理论》、《实战手筋-操盘黑客理论》投资专著
                <br />
                4.任深圳清华、北大、浙大、西工大等高校证券、投行、并购等课程客座教授
                <br />
                5.2009年被人大聘为《基金法》立法起草小组顾问专家
              </p>
            </div>
          </el-col>
        </el-row>
      </el-card>
      <nuxt-link class="more" to="/team">了解更多</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.team {
  background-color: #f5f5f5;
  width: 80%;
  display: grid;
  /* grid-gap: 10px; */
  margin: 0 auto;
}
.el-card {
  height: 360px;
}
.el-card img {
  height: 320px;
  width: 250px;
}
.dingyang p span:first-child {
  /* 这里是丁洋这两个字的样式 */
  font-family: "微软雅黑", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  text-align: left;
  color: #666666;
  vertical-align: none;
}
.dingyang p span:last-child {
  /* 这里是职位那几个字的样式 */
  font-family: "微软雅黑", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #999999;
  text-align: left;
  padding-left: 20px;
  font-size: 18px;
}
.introduce p:first-child {
  font-family: "微软雅黑", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  color: #999999;
  text-align: left;
  line-height: 24px;
  /* text-indent: 2em; */
  text-indent: 2em;
}
.introduce p:last-child {
  font-family: "微软雅黑", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  color: #999999;
  text-align: left;
  line-height: 24px;
  /* text-indent: 2em; */
  /* text-indent: 2em; */
  /* padding-left: 5px; */
}
.more {
  border: 1px solid rgb(223, 219, 219);
  font-family: 微软雅黑, sans-serif;
  font-style: normal;
  font-size: 12px;
  color: rgb(153, 153, 153);
  position: relative;
  right: -90%;
  bottom: 80px;
  border-radius: 2px;
  text-decoration: none;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 50px;
  background-color: white;
}
/* .more {
  border: 1px solid rgb(223, 219, 219);
  font-family: 微软雅黑, sans-serif;
  font-style: normal;
  font-size: 16px;
  color: rgb(153, 153, 153);
  position: relative;
  right: -90%;
  bottom: -15px;
  border-radius: 2px;
  text-decoration: none;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 65px;
  background-color: white;
} */
</style>