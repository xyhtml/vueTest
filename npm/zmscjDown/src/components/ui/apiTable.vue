<template>
  <div class="apiTableBox">
    <table class="apiTable">
      <tr class="tit">
        <td width="160">参数</td>
        <td width="300">说明</td>
        <td width="160">类型</td>
        <td>默认</td>
      </tr>
      <tr class="conTit" v-for="(item, index) in tabData" :key="index">
        <td>{{item.parame}}</td>
        <td>{{item.exp}}</td>
        <td>{{item.type}}</td>
        <td>{{item.default}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    tabData: {
      type: Array
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import "../../style/var.scss";
.apiTableBox {
  width: 100%;
  height: 100%;
  padding: 10px 0 0 0;
  height: 100%;
  font-size: 15px;
}
.apiTable {
  width: 100%;
  .tit {
    opacity: 0.7;
    height: 45px;
  }
  .conTit {
    height: 45px;
    border-top: 1px solid $borderColor;
  }
}
</style>
