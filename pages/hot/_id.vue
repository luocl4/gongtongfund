<template>
  <div>
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      style="padding-bottom: 50px; padding-left: 150px; padding-top: 20px"
    >
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>热点推荐</el-breadcrumb-item>
      <el-breadcrumb-item>热点详细</el-breadcrumb-item>
    </el-breadcrumb>
    <Detail
      v-bind:articleId="$route.query.articleId"
      :comeRoute="route"
    ></Detail>
  </div>
</template>

<script>
import Detail from "@/components/BaseNewsDetail.vue";
export default {
  data() {
    return {
      route: "hot",
    };
  },
  components: {
    Detail,
  },
};
</script>

<style>
</style>