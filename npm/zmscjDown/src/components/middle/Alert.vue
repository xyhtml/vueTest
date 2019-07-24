<template>
  <div class="Alert">
    <div class="Tit">
      <h3>{{$route.name}}</h3>
      <span class="ts">筑民生通用弹窗</span>
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
      <span class="zms-keyword">&lt;zms-alert /&gt;</span>
      <code></code>
      <span class="ts">// 自定义标题</span>
      <span class="zms-keyword">&lt;zms-alert :title="自定义标题" /&gt;</span>
      <code></code>
      <span class="ts">// 事件调用</span>
      <span class="zms-keyword">&lt;zms-alert @cancelClick="cancelClick" @sureClick="sureClick" /&gt;</span></pre>
    </div>
    <div class="Tit">
      <h3>Props</h3>
      <ApiTable :tabData="tabData" />
    </div>
    <div class="Tit">
      <h3>Event</h3>
      <EventTable :tabData="tabDataEvent" />
    </div>
  </div>
</template>
<script>
import ApiTable from '../ui/apiTable'
import EventTable from '../ui/eventTable'
export default {
  components: {
    ApiTable,
    EventTable
  },
  data () {
    return {
      tabData: [
        {
          parame: 'title',
          exp: '标题',
          type: 'string',
          default: '-'
        },
        {
          parame: 'textOne',
          exp: '提示内容1',
          type: 'string',
          default: '-'
        },
        {
          parame: 'textTwo',
          exp: '提示内容2',
          type: 'string',
          default: '-'
        },
        {
          parame: 'cancelText',
          exp: '取消按钮文字',
          type: 'string',
          default: '-'
        },
        {
          parame: 'sureText',
          exp: '确定按钮文字',
          type: 'string',
          default: '-'
        }
      ],
      tabDataEvent: [
        {
          parame: 'cancelClick',
          exp: '取消事件',
          ps: '-'
        },
        {
          parame: 'title',
          exp: '标题',
          ps: '-'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
.Alert {
  width: 100%;
  height: 100%;
}
</style>
