// ak 需要自己去申请
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'qFVURlHO8jC2QOn3MpkstLyQBKnG3NBh'
})
export default () => {
  Vue.use(BaiduMap)
}
