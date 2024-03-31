<template>
  <div>
    <baidu-map
      :dragging="dragging"
      :center="center"
      :zoom="zoom"
      style="height: 320px; width: 580px"
      :scroll-wheel-zoom="scroll"
    >
      <bm-info-window :position="center" :title="title" :show="show">
        <p v-html="contents"></p>
      </bm-info-window>
    </baidu-map>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jump_path: "",
      center: { lng: 114.016863, lat: 22.541015 },
      zoom: 20, //缩放级别
      title: "深圳市共同基金管理有限公司",
      contents: "地址：深圳市福田区香蜜湖街道求是大厦西座2701室", //标签内容
      show: true, //显示标签
      scroll: true, //地图缩放
      dragging: true, //地图拖拽
    };
  },
};
</script>
<style >
.BMap_cpyCtrl {
  display: none;
}
.anchorBL {
  display: none;
}
</style>