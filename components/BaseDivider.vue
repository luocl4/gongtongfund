<template>
  <div>
    <el-row :gutter="20" class="news_announcement">
      <div class="news">
        <el-col :span="20">
          <el-row>
            <div class="grid-content bg-purple">
              <h2>
                <b>{{ titleChinese }}</b>
                {{ titleEnglish }}
              </h2>
            </div>
          </el-row>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
/*
 * Description 这个组件就是首页中的一个个子标题，如果传入的 isShow 为 false 就不展示 <a>
 * Author 赵奇
 * Date 2022/06/01
 * Param { Object }
 * Param { Object }
 */
import "@/plugins/axios";

export default {
  name: "Divider3",
  props: {
    titleChinese: {
      type: String,
      default: "标题",
    },
    titleEnglish: {
      type: String,
      default: "Title",
    },
    url: {
      type: String,
      default: "/#",
    },
  },
  data() {
    return {
      listContent: [],
      listTitle: "",
      listUrl: "",
    };
  },
};
</script>

<style scoped>
.el-divider--vertical {
  height: 70px;
  border: 1px solid #97b9ff;
  background-color: #97b9ff;
}

span {
  vertical-align: middle;
  display: inline-block;
}

.news {
  display: block;
  margin: 0 auto;
  width: 80%;
  height: 100%;
  position: relative;
}

.el-col {
  min-width: 200px;
  padding-left: 0px !important;
  display: flex;
}

.news_announcement {
  /* padding-top: 1px; */
  padding-bottom: 10px;
}

ul {
  padding: 0;
}
ul li a {
  color: rgb(48, 47, 47);
}

ul li {
  list-style-type: none;
  text-align: left;
  padding-left: 20px;
}

.link {
  width: 100%;
  display: block;
  position: relative;
  left: 5px;
  text-decoration: none;
  color: blue;
}
h2 :first-child {
  font-size: 20px;
  color: #666666;
}
h2 {
  font-size: 18px;
  color: #999999;
  margin-bottom: 0;
}
</style>
