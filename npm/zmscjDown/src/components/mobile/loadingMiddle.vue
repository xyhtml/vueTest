  <template>
  <div class="mob-loading">
    <div class="con">
      <div class="btn" v-for="(item, index) in slData" :key="index" @click="jsFn(item, index)">{{item.txt}}</div>
    </div>
    <zms-loading-middle v-show="index == 0" />
    <zms-loading-middle v-show="index == 1" :loadingImg="img" />
    <zms-loading-middle v-show="index == 2" :loadingImg="img" text="加载中..." />
  </div>
</template>
<script>
import Vue from 'vue'
import { LoadingMiddle } from 'zms-cj'
Vue.use(LoadingMiddle)
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
        },
        {
          txt: '提示文字'
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
  .zms-loading-box-center {
    position: absolute;
  }
}
</style>
