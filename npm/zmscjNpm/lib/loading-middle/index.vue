<template>
  <div class="zms-loading-box-center">
    <div class="loading-component">
      <img :src="loadingImg" v-if="loadingImg != ''" />
      <div class="svg" v-else>
        <svg viewBox="25 25 50 50" class="van-loading__circular">
          <circle cx="50" cy="50" r="20" fill="none"></circle>
        </svg>
      </div>
      <div class="text" v-html="text"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'zms-loading-middle',
  data () {
    return {
    }
  },
  props: {
    text: {
      type: String,
      default: 'loading...'
    },
    loadingImg: {
      type: String,
      default: ''
    }
  },
  created () { },
  mounted () {
  },
  watch: {},
  methods: {}
}
</script>
<style lang="scss">
@import "../style/animation.scss";
.zms-loading-box-center {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 900;
  background-color: rgba(0, 0, 0, 0.3);
}
.loading-component {
  background: #fff;
  border-radius: 7px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  img {
    width: 100px;
  }
  .svg {
    width: 50px;
    height: 50px;
    color: #d4d4d4;
    -webkit-animation: van-rotate 0.8s linear infinite;
    animation: van-rotate 0.8s linear infinite;
    .van-loading__circular circle {
      stroke: currentColor;
      stroke-width: 3;
      stroke-linecap: round;
      -webkit-animation: van-circular 1.5s ease-in-out infinite;
      animation: van-circular 1.5s ease-in-out infinite;
    }
  }
  .text {
    font-family: Noto Sans S Chinese, PingFangSC_L;
    font-size: 14px;
    color: #999;
  }
}
</style>

