<template>
  <div class="mibbleTop">
    <div class="Tit">
      <h3>{{pageData.name}}</h3>
      <span class="ts">{{pageData.namePs}}</span>
    </div>
    <div class="Tit">
      <h3>引入</h3>
      <pre class="pre">
      <span class="zms-keyword">import</span> { <b class="szmdx">{{pageData.name}}</b> } <span class="zms-keyword">from</span> 'zms-cj'
      <code></code>
      Vue.use({{pageData.name}})</pre>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    /**
     * name :'插件名'
     * namePs: '简介'
     *  */
    pageData: {
      type: Object
    }
  },
  data () {
    return {
    }
  }
}
</script>
