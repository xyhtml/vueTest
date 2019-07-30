<template>
  <div class="Toast">
    <div class="Tit">
      <h3>{{$route.name}}</h3>
      <span class="ts">轻提示（只支持一行）</span>
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
      Toast('提示内容');
      <code></code>
      <span class="ts">// 自定义时间</span>
      Toast({
        <span class="zms-def">text: '提示内容',</span>
        <span class="zms-def">duration: 5000</span>
      });</pre>
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
          parame: 'text',
          exp: '提示内容',
          ps: 'String'
        },
        {
          parame: 'duration',
          exp: '显示时间，默认3000ms',
          ps: 'Nub'
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
