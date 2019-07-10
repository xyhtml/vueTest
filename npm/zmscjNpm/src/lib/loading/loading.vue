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
@import '../css3.scss';
</style>
