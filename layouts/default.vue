<template>
  <div class="zishiying">
    <Header class="header"></Header>
    <!-- 页头组件 -->
    <nuxt class="nuxt"></nuxt>
    <Footer class="footer" />
    <!-- 页尾组件 -->
    <Suspension class="suspension"></Suspension>
  </div>
</template>

<script>
import Header from "@/components/AllHeader.vue";
import Footer from "@/components/AllFooter.vue";
import Suspension from "@/components/Suspension.vue";

export default {
  components: {
    Header,
    Footer,
    Suspension,
  },
};
</script>

<style>
/* zishiying {
  width: 1920px;
} */
.nuxt {
  margin-top: 100px;
}
.header {
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 99999;
}
.footer {
  width: 100%;
  /* background-color: white; */
  position: relative;
  bottom: 0;
  z-index: 99999;
}
body {
  margin-top: 0px;
  margin-left: 0px;
  margin-bottom: 0px;
  width: 100vm;
  height: 100%;
  overflow-x: hidden;
}
.suspension {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 99999;
}
</style>
