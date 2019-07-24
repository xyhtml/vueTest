  <template>
  <div class="mob-loading">
    <zms-loading />
  </div>
</template>
<script>
import Vue from 'vue'
import { Loading } from 'zms-cj'
Vue.use(Loading)
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
  .zms-loadoingWp {
    position: absolute;
    .loadoingCont {
      position: absolute;
    }
  }
}
</style>
