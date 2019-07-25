<template>
  <div class="loadingMiddle">
    <div class="Tit">
      <h3>{{$route.name}}</h3>
      <span class="ts">中间小部分遮罩Loading</span>
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
      &lt;zms-loading /&gt;
      <code></code>
      <span class="ts">// 自定义加载图片</span>
      &lt;zms-loading <span class="zms-keyword">:loadingImg="图片地址"</span> /&gt;
      <code></code>
      <span class="ts">// 自定义加载图片与提示文字</span>
      &lt;zms-loading <span class="zms-keyword">:loadingImg="图片地址" :text="提示文字"</span> /&gt;</pre>
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
        },
        {
          parame: 'text',
          exp: '提示文字',
          type: 'string',
          default: 'loading...'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.loadingMiddle {
  width: 100%;
  height: 100%;
}
</style>
