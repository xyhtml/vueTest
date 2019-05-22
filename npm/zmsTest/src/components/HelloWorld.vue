<template>
  <div class="hello">
    <!-- <zms-alert v-if="true"></zms-alert> -->
    <!-- <zms-loading ></zms-loading> -->
    <zms-loading-middle :loadingImg="loadingImg"></zms-loading-middle>
    <!-- <div class="row" id="pdfDom">
      给自己需要导出的ui部分.定义id为"pdfDom".此部分将就是pdf显示的部分
    </div>
    <button type="button" class="btn btn-primary" v-on:click="getPdf()">导出PDF</button> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      loadingImg: require('../assets/loading.gif')
    }
  }
}
</script>
