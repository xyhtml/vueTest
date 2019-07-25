  <template>
  <div class="mob-alert">
    <div class="con">
      <div class="btn" v-for="(item, index) in slData" :key="index" @click="jsFn(item, index)">{{item.txt}}</div>
    </div>
    <zms-alert v-show="index == 0" @sureClick="sureClick" />
    <zms-alert v-show="index == 1" title="自定义标题" textOne="自定义内容1" textTwo="自定义内容2" @sureClick="sureClick" />
    <zms-alert v-show="index == 2" title="自定义内容" cancelText="取消" @sureClick="sureClick" @cancelClick="sureClick" />
  </div>
</template>
<script>
import Vue from 'vue'
import { Alert } from 'zms-cj'
Vue.use(Alert)
export default {
  data () {
    return {
      index: 9999,
      slData: [
        {
          txt: '基本示例'
        },
        {
          txt: '自定义内容'
        },
        {
          txt: '显示取消按钮'
        }
      ],
      img: require('../../assets/loading.gif')
    }
  },
  methods: {
    jsFn (item, index) {
      this.index = index
    },
    sureClick () {
      this.index = 9999
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
  .zms-alert-box-centerBox {
    position: absolute;
  }
}
</style>
