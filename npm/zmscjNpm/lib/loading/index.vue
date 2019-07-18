<template>
  <div class='zms-loadoingWp'>
    <div class="loadoingCont">
      <img v-if="loadingImg != ''" :src="loadingImg" />
      <div class="svg" v-else>
        <svg viewBox="25 25 50 50" class="van-loading__circular">
          <circle cx="50" cy="50" r="20" fill="none"></circle>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'zms-loading',
  props: {
    loadingImg: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  }
}
</script>

<style type="text/scss" lang="scss">
@import "../style/animation.scss";
.loadoingCont {
  top: 50%;
  left: 50%;
  position: fixed;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 5px;
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  img {
    height: 100px;
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
}
.zms-loadoingWp {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 998;
  background: #fff;
}
</style>
