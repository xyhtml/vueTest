<template>
  <div class="Alert">
    <MibbleTopTit :pageData="pageData"></MibbleTopTit>
    <!-- <div class="Tit">
      <h3>{{$route.name}}</h3>
      <span class="ts">筑民生通用弹窗</span>
    </div>
    <div class="Tit">
      <h3>引入</h3>
      <pre class="pre">
      <span class="zms-keyword">import</span> { <b class="szmdx">{{$route.name}}</b> } <span class="zms-keyword">from</span> 'zms-cj'
      <code></code>
      Vue.use({{$route.name}})</pre>
    </div> -->
    <div class="Tit">
      <h3>代码演示</h3>
      <pre class="pre">
      <span class="ts">// 基本示例</span>
      &lt;zms-alert <span class="zms-keyword">:alertData="alertData"</span> /&gt;
      <span class="zms-keyword">export default </span> {
        data() {
          <span class="zms-keyword">return </span> {
            alertData: {
              title: '温馨提示',
              textOne: '提示内容1',
              textTwo: '提示内容2',
              cancelText: '取消',
              sureText: '确定'
            },
            <span class="ts">// 不显示取消</span>
            alertData: {
              cancelText: '',
            }
          }
        }
      }
      <span class="ts">// 事件调用</span>
      &lt;zms-alert <span class="zms-keyword">@cancelClick="cancelClick" @sureClick="sureClick"</span> /&gt;</pre>
    </div>
    <div class="Tit">
      <h3>Props</h3>
      <ApiTable :tabData="tabData" />
    </div>
    <div class="Tit">
      <h3>API</h3>
      <ApiTable :tabData="ApiData" />
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
import MibbleTopTit from '../ui/mibble_top'
export default {
  components: {
    ApiTable,
    EventTable,
    MibbleTopTit
  },
  data () {
    return {
      pageData: {
        name: this.$route.name,
        namePs: '筑民生通用弹窗'
      },
      tabData: [
        {
          parame: 'alertData',
          exp: '传入数据',
          type: 'Object',
          default: '-'
        }
      ],
      ApiData: [
        {
          parame: 'title',
          exp: '标题',
          type: 'string',
          default: '温馨提示'
        },
        {
          parame: 'textOne',
          exp: '提示内容1',
          type: 'string',
          default: '提示内容1'
        },
        {
          parame: 'textTwo',
          exp: '提示内容2',
          type: 'string',
          default: '提示内容2'
        },
        {
          parame: 'cancelText',
          exp: '取消按钮文字',
          type: 'string',
          default: '取消'
        },
        {
          parame: 'sureText',
          exp: '确定按钮文字',
          type: 'string',
          default: '确定'
        }
      ],
      tabDataEvent: [
        {
          parame: 'cancelClick',
          exp: '取消事件',
          ps: '-'
        },
        {
          parame: 'sureClick',
          exp: '确定事件',
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
