<template>
  <div class="header w">
    <el-row>
      <el-col :span="5">
        <!-- 标志模块 -->
        <a href="/" class="logo">
          <img class="logoImg" src="@/assets/gt-logo.png" />
        </a>
      </el-col>
      <el-col :span="19">
        <!-- 文字导航栏模块 -->
        <el-row>
          <div class="nav">
            <ul>
              <el-col :span="4">
                <li>
                  <nuxt-link to="/" id="text"><a href="#">首页</a></nuxt-link>
                </li>
              </el-col>
              <el-col :span="4">
                <li>
                  <nuxt-link to="/fund" id="text"
                    ><a href="#">基金报告</a></nuxt-link
                  >
                </li>
              </el-col>
              <el-col :span="4">
                <li>
                  <nuxt-link to="/news" id="text"
                    ><a href="#">新闻动态</a></nuxt-link
                  >
                </li>
              </el-col>
              <el-col :span="4">
                <li>
                  <nuxt-link to="/team" id="text">
                    <a href="#">精英团队</a>
                  </nuxt-link>
                </li>
              </el-col>
              <el-col :span="4">
                <li>
                  <nuxt-link to="/about" id="text">
                    <a href="#">关于共同</a>
                  </nuxt-link>
                </li>
              </el-col>
              <el-col :span="4" id="rexian">
                <li>
                  <p><b>服务热线:</b><br />186-7550-0258</p>
                </li>
              </el-col>
            </ul>
          </div>
        </el-row></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // activeIndex: "1",
      // activeIndex2: "1",
    };
  },
  methods: {
    // handleSelect(key, keyPath) {},
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "PingFang SC";
  letter-spacing: 0.04em;
}
.w {
  margin: 0 auto;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.header {
  min-height: 120px;
  margin: 0 auto;
}
.logo {
  float: left;
  /* width: 10%; */
  /* height: 80%; */
  margin-left: 6%;
  margin-top: 10%;
}
.nav {
  float: right;
  height: 120px;
  /* width: 1100px; */
  /* margin-right: 4%; */
}
.nav ul li {
  float: left;
  height: 120px;
  width: 160px;
  box-sizing: border-box;
}
.nav ul li a {
  display: block;
  height: 120px;
  text-align: center;
  line-height: 120px;
  color: rgb(127, 127, 127);
  font-size: 15px;
}
.nav ul li p {
  /* all: initial; */
  color: rgb(127, 127, 127);
  font-size: 15px;
  padding-top: 25%;
  /* padding-left: 20%; */
}
.logoImg {
  width: 70%;
  height: 70%;
}
.nav ul li:hover {
  border-block-end: 4px solid #97b9ff;
}
@media only screen and (max-width: 1100px) {
  .header {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .logo {
    max-width: 100%;
    width: auto;
    margin-top: 26px;
    margin-left: 0;
  }
  .nav ul li {
    width: 120px;
    height: 80px;
  }
  .nav {
    height: 80px;
    line-height: 80px;
    width: fit-content;
  }
  .nav ul li a {
    line-height: 80px;
    height: 80px;
  }
}
#rexian {
  pointer-events: none;
}
</style>
