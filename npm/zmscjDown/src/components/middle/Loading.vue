<template>
  <div class="loading">
    <div class="Tit">
      <h3>{{$route.name}}</h3>
      <span class="ts">全屏Loading加载</span>
    </div>
    <div class="Tit">
      <h3>引入</h3>
      <pre class="pre">
      <span class="zms-keyword">import</span> { {{$route.name}} } <span class="zms-keyword">from</span> 'zms-cj'
      <code></code>
      Vue.use({{$route.name}})</pre>
    </div>
    <div class="Tit">
      <h3>代码演示</h3>
      <pre class="pre">
      <span class="ts">// 基本示例</span>
      &lt;zms-loading-middle /&gt;
      <code></code>
      <span class="ts">// 自定义加载图片</span>
      &lt;zms-loading-middle <span class="zms-keyword">:loadingImg="图片地址"</span> /&gt;</pre>
    </div>
    <div class="Tit">
      <h3>Props</h3>
      <ApiTable :tabData="tabData" />
    </div>
  </div>
</template>
<script>
import ApiTable from '../ui/apiTable'
export default {
  components: {
    ApiTable
  },
  data () {
    return {
      tabData: [
        {
          parame: 'loadingImg',
          exp: '加载图片',
          type: 'string',
          default: '-'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.loading {
  width: 100%;
  height: 100%;
}
</style>
