  <template>
  <div class="mob-alert">
    <div class="con">
      <div class="btn" v-for="(item, index) in slData" :key="index" @click="jsFn(item, index)">{{item.txt}}</div>
    </div>
    <zms-alert v-show="index == 0" :alertData="alertData" @sureClick="sureClick" @cancelClick="sureClick" />
    <zms-alert v-show="index == 1" :alertData="alertDataTwo" @sureClick="sureClick" />
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
      alertData: {
        title: '温馨提示',
        textOne: '提示内容1',
        textTwo: '提示内容2',
        cancelText: '取消',
        sureText: '确定'
      },
      alertDataTwo: {
        textOne: '不显示取消',
        cancelText: ''
      },
      slData: [
        {
          txt: '基本示例'
        },
        {
          txt: '不显示取消'
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
