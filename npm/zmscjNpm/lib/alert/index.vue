<template>
  <div class="zms-alert-box-centerBox">
    <div class="alert-component">
      <div class="alert-title" v-html="alertData.title ? alertData.title : '温馨提示'"></div>
      <div class="alert-text">
        <div class="alert-text-one" v-html="alertData.textOne ? alertData.textOne : '提示内容1'"></div>
        <div v-if="alertData.textTwo && alertData.textTwo !=''" class="alert-text-two" v-html="alertData.textTwo ? alertData.textTwo: '提示内容2'"></div>
      </div>
      <div class="alert-btn">
        <div v-if="alertData.cancelText && alertData.cancelText != ''" @click='cancelClick' class="alert-btn-cancel">{{alertData.cancelText}}</div>
        <div @click="sureClick" class="alert-btn-sure">{{alertData.sureText ? alertData.sureText : '确定'}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'zms-alert',
  data () {
    return {
    }
  },
  props: {
    alertData: {
      type: Object,
      default () {
        return {
          title: '温馨提示',
          textOne: '提示内容1',
          textTwo: '提示内容2',
          cancelText: '取消',
          sureText: '确定'
        }
      }
    }
  },
  created () {
  },
  mounted () {
  },
  watch: {},
  methods: {
    cancelClick () {
      this.$emit('cancelClick')
    },
    sureClick () {
      this.$emit('sureClick')
    }
  }
}
</script>
<style lang="scss">
.zms-alert-box-centerBox {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
  .alert-component {
    width: 80%;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    .alert-title {
      flex: 1;
      width: 100%;
      font-family: Noto Sans S Chinese Medium;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px 0;
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
    .alert-text {
      width: 100%;
      flex: 2.5;
      border-top: 1px solid #efefef;
      border-bottom: 1px solid #efefef;
      padding: 21px 34px;
      box-sizing: border-box;
      .alert-text-one {
        font-family: Noto Sans S Chinese Medium;
        line-height: 20px;
        text-align: left;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        font-size: 16px;
        color: #666;
      }
      .alert-text-two {
        margin-top: 15px;
        font-family: Noto Sans S Chinese Medium;
        line-height: 20px;
        text-align: left;
        font-size: 12px;
        color: #0aa6a8;
      }
    }
    .bottomLine {
      border-top: 1px solid #efefef;
    }
    .alert-btn {
      flex: 1;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      .alert-btn-cancel {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px 0;
        box-sizing: border-box;
        border-right: 1px solid #efefef;
        color: #666;
        font-size: 16px;
        cursor:pointer;
      }
      .alert-btn-sure {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px 0;
        box-sizing: border-box;
        font-size: 16px;
        color: #0aa6a8;
        cursor:pointer;
      }
    }
  }
}
</style>
