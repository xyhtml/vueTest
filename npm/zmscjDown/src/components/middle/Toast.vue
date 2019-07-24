<template>
  <div class="Toast">
    <div class="Tit">
      <h3>{{$route.name}}</h3>
      <span class="ts">轻提示（只支持一行文）</span>
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
      <span class="zms-keyword">&lt;zms-loading-middle /&gt;</span>
      <code></code>
      <span class="ts">// 自定义加载图片</span>
      <span class="zms-keyword">&lt;zms-loading-middle :loadingImg="图片地址" /&gt;</span></pre>
    </div>
    <div class="Tit">
      <h3>Event</h3>
      <EventTable :tabData="tabDataEvent" />
    </div>
  </div>
</template>
<script>
import EventTable from '../ui/eventTable'
export default {
  components: {
    EventTable
  },
  data () {
    return {
      tabDataEvent: [
        {
          parame: 'txt',
          exp: '提示内容',
          ps: 'object'
        },
        {
          parame: 'duration',
          exp: '显示时间，默认3000',
          ps: 'number'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.Toast {
  width: 100%;
  height: 100%;
}
</style>
