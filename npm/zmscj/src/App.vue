<template>
  <div id="app">
    <zms-alert v-if="false"></zms-alert>
    <zms-loading v-if="false" :loadingImg="loadingImg"></zms-loading>
    <zms-loading-middle></zms-loading-middle>
  </div>
</template>

<script>
import Vue from 'vue'
import zmscj from './es/index.js'
Vue.use(zmscj)
export default {
  name: 'app',
  data () {
    return {
      msg: '',
      loadingImg: require('./es/img/loading.gif')
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
