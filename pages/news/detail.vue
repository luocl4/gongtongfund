<template>
  <div class="gaodu">
    <el-breadcrumb separator-class="el-icon-arrow-right"
      style="padding-bottom: 50px; padding-left: 150px; padding-top: 20px">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>新闻动态</el-breadcrumb-item>
      <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <div>路由参数：{{ $route.query.id }}</div> -->
    <Detail v-bind:articleId="$route.query.articleId" :comeRoute="route"></Detail>
  </div>
</template>

<script>
import Detail from "@/components/BaseNewsDetail.vue";
export default {
  data() {
    return {
      route: "news",
    };
  },
  components: {
    Detail,
  },
  // mounted() {
  //   this.articeId = $route.query.id;
  // },
};
</script>

<style>
.gaodu {
  padding-bottom: 118px;
}
</style>