<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ route }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      default: "路径",
    },
  },
};
</script>

<style scoped>
div {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>