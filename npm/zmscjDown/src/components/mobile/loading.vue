  <template>
  <div class="mob-loading">
    <div class="con">
      <div class="btn" v-for="(item, index) in slData" :key="index" @click="jsFn(item, index)">{{item.txt}}</div>
    </div>
    <zms-loading v-show="index == 0" />
    <zms-loading v-show="index == 1" :loadingImg="img" />
  </div>
</template>
<script>
import Vue from 'vue'
import { Loading } from 'zms-cj'
Vue.use(Loading)
export default {
  data () {
    return {
      index: 9999,
      slData: [
        {
          txt: '基本示例'
        },
        {
          txt: '加载图片'
        }
      ],
      img: require('../../assets/loading.gif')
    }
  },
  methods: {
    jsFn (item, index) {
      this.index = index
      setTimeout(() => {
        this.index = 9999
      }, 3000)
    }
  }
}
</script>
<style lang="scss">
@import "../../style/function.scss";
.mob-loading {
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
