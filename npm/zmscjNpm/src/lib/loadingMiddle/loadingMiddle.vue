<template>
  <div class="zms-loading-box-center">
    <div class="loading-component">
      <img v-if="loadingImg != ''" :src="loadingImg" />
      <div class="svg" v-else>
        <svg viewBox="25 25 50 50" class="van-loading__circular">
          <circle cx="50" cy="50" r="20" fill="none"></circle>
        </svg>
      </div>
      <div class="text" v-html="text"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../css3";
</style>

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
    this.$nextTick(() => {
      this.px2rem = document.documentElement.clientWidth / 10
    })
  },
  watch: {},
  methods: {}
}
</script>
