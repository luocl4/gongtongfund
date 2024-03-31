<template>
  <div class="total">
    <!-- 回到顶部悬浮窗 -->
    <div class="xuanfu" v-show="isShowTop">
      <button @click="toTop()">
        <i class="iconfont icon-huidaodingbu"></i>
        <p>回到顶部</p>
      </button>
    </div>
    <!-- 联系我们悬浮窗 -->
    <div
      class="xuanfu"
      @mouseover="changeContactToTrue()"
      @mouseleave="changeContactToFalse()"
    >
      <button>
        <i class="iconfont icon-weixin"></i>
        <p>联系我们</p>
      </button>
      <!-- 放在联系我们上面出来的东西 -->
      <div id="lianxi" v-show="isShowContact">
        <img id="lianxiimg" src="@/assets/联系我们.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowTop: false,
      isShowContact: false,
    };
  },
  mounted() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll); // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
  },
  methods: {
    toTop() {
      var height =
        document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(height);
      // console.log("totop");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // this.isShowTop = false;
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; // 滚动条偏移量
      // let offsetTop = document.querySelector(".total").offsetTop; // 要滚动到顶部吸附的元素的偏移量
      // console.log(scrollTop);
      if (scrollTop > 400) {
        this.isShowTop = true;
      } else {
        this.isShowTop = false;
      }
    },
    changeContactToTrue() {
      this.isShowContact = true;
    },
    changeContactToFalse() {
      this.isShowContact = false;
    },
  },
};
</script>

<style scoped>
.xuanfu {
  width: 80px;
  height: 80px;
  background-color: white;
  text-align: center;
  border: 1px solid rgb(223, 219, 219);
  border-radius: 2px;
  /* margin-top: 200px; */
  margin-top: 10px;
}
.xuanfu button {
  border: 0px;
  background-color: white;
  margin-top: 12px;
  z-index: 10000;
}
.total :hover {
  cursor: pointer;
}
.xuanfu :hover p {
  color: rgb(0, 121, 254);
}
.xuanfu :hover i {
  color: rgb(0, 121, 254);
}
.iconfont {
  /* width: 24px !important;
  height: 28px !important; */
  font-size: 28px;
  font-family: FontAwesome, sans-serif;
  font-weight: 400;
  color: rgb(204, 204, 204);
  font-style: normal;
  /* line-height: 22px; */
  /* padding-top: 200px; */
}
.xuanfu button p {
  font-family: 微软雅黑, sans-serif;
  font-weight: 400;
  color: rgb(153, 153, 153);
  font-size: 12px;
}
button {
  height: 80%;
}
#lianxi {
  position: relative;
  left: -225px;
  top: -240px;
  /* width: 50px;
  height: 50px; */
  /* z-index: 10000; */
}
#lianxiimg {
  width: 250%;
  height: 250%;
}
</style>