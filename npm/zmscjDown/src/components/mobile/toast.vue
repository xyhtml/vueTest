  <template>
  <div class="mob-alert">
    <div class="con">
      <div class="btn" v-for="(item, index) in slData" :key="index" @click="jsFn(item, index)">{{item.txt}}</div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Toast } from 'zms-cj'
Vue.use(Toast)
export default {
  data () {
    return {
      index: 9999,
      slData: [
        {
          txt: '基本示例'
        },
        {
          txt: '自定义时间'
        }
      ],
      img: require('../../assets/loading.gif')
    }
  },
  methods: {
    jsFn (item, index) {
      switch (index) {
        case 0:
          Toast(this.slData[0].txt)
          break
        case 1:
          Toast({
            txt: this.slData[1].txt,
            duration: 5000
          })
          break
        default:
          break
      }
    }
  }
}
</script>
<style lang="scss">
@import "../../style/function.scss";
.mob-alert {
  width: 100%;
  height: 100%;
  position: relative;
  .con {
    @include btnBox;
    .btn {
      @include btn;
      margin: 0 0 10px 0;
    }
  }
  .zms-loadoingWp {
    position: absolute;
    .loadoingCont {
      position: absolute;
    }
  }
}
</style>
