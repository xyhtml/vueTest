<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      screenWidth: document.body.clientWidth
    }
  },
  mounted () {
    // const that = this
    // window.onresize = () => {
    //   return (() => {
    //     window.screenWidth = document.body.clientWidth
    //     that.screenWidth = window.screenWidth
    //     that.$store.state.windowWidth = that.screenWidth
    //   })()
    // }
  }
}
</script>

<style lang="scss">
@import "./style/rest.scss";
@import "./style/com.scss";
#app {
  width: 100%;
  height: 100%;
  font-size: 16px;
}
</style>
