  <template>
  <div class="mob-loading">
    <zms-loading-middle />
  </div>
</template>
<script>
import Vue from 'vue'
import { LoadingMiddle } from 'zms-cj'
Vue.use(LoadingMiddle)
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
.mob-loading {
  width: 100%;
  height: 100%;
  position: relative;
  .zms-loading-box-center {
    position: absolute;
  }
}
</style>
