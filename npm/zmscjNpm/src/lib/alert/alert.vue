<template>
  <div class="zms-alert-box-centerBox">
    <div class="alert-component">
      <div class="alert-title" v-html="title"></div>
      <div class="alert-text">
        <div class="alert-text-one" v-html="textOne"></div>
        <div v-if="textTwo !=''" class="alert-text-two" v-html="textTwo"></div>
      </div>
      <div class="alert-btn">
        <div v-if="cancelText != ''" @click='cancelClick' class="alert-btn-cancel">{{cancelText}}</div>
        <div @click="sureClick" class="alert-btn-sure">{{sureText}}</div>
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
    title: {
      type: String,
      default: '温馨提示'
    },
    textOne: {
      type: String,
      default: '文案1'
    },
    textTwo: {
      type: String,
      default: '文案2'
    },
    cancelText: {
      type: String,
      default: ''
    },
    sureText: {
      type: String,
      default: '确定'
    }
  },
  created () { },
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
