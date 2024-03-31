<template>
  <div id="footer">
    <footer class="footer">
      <div class="lastest" style="text-align: center">
        <p style="color: white">
          Copyright © 2022 Gongtongfund. All Rights Reserved. Email:
          szgtjj2020526@163.com
          <br />
          版权所有 © 深圳市共同基金管理有限公司
          <a target="_blank" href="https://beian.miit.gov.cn/"
            >粤ICP备2022089211号-1
          </a>
          <br />
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
/*
 * Description 其中插入的图片就是共同的公众号
 * Author 赵奇
 * Date 2022/06/01
 * Param { Object }
 * Param { Object }
 */
export default {
  name: "Footer",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
/* .footer {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  bottom: 0;
  width: 100%;
  font-family: PingFang SC;
} */

.footer p {
  margin: 0;
  padding: 5px 0 0 0;
}

/* .footer__header {
  padding: 30px 100px;
} */

/* .container {
  padding: 8px 100px;
  font-size: 15px;
  flex-direction: row;
  word-wrap: break-word;
} */

/* .container-left {
  margin-bottom: 30px;
} */

/* .container-right {
  margin-top: -60px;
  text-align: center;
} */

/* img {
  width: 120px;
  height: 144px;
  margin-left: 30%;
} */
.lastest {
  background-color: rgba(0, 0, 0, 0.498039215686275);
}
.lastest p {
  /* font-size: 12px; */
  padding-bottom: 5px;
}
/* b {
  font-size: 22px;
} */
/* .pweizhi {
  margin-left: 20px;
  margin-top: 30px;
} */
/* .gewai {
  margin-left: 15px !important;
} */
/* .container-right {
  margin-top: 25px;
  margin-left: 50px;
} */
a {
  text-decoration-line: none;
  color: white;
}
</style>
