<template>
  <div id="app">
    <zms-alert v-if="false"></zms-alert>
    <zms-loading v-if="false" :loadingImg="loadingImg"></zms-loading>
    <zms-loading-middle v-if="true"></zms-loading-middle>
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
</style>
