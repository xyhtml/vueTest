<template>
  <div class="index">
    <div class="left">
      <div class="leftBox">
        <div class="leftUl">
          <h3 class="tit">开发指南{{this.$store.state.pathName}}</h3>
          <div class="li" v-for="(item, index) in leftDataKFZN" :key="index">
            <router-link :class="{'current': item.name == routeNames}" :to="{ name:item.name}">{{item.txt}}</router-link>
          </div>
        </div>
        <div class="leftUl">
          <h3 class="tit">组件</h3>
          <div class="li" v-for="(item, index) in leftDataZJ" :key="index">
            <router-link :class="{'current': item.name == routeNames}" :to="{ name:item.name}">{{item.txt}}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="middle">
      <router-view />
    </div>
    <div class="right">
      <!-- <MobileIndex /> -->
      <iframe class="iframe" :src="iframeUrl" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
import MobileIndex from '../components/mobile/index'
import { Alert } from 'zms-cj'
import Vue from 'vue'
Vue.use(Alert)
export default {
  components: {
    MobileIndex
  },
  data () {
    return {
      leftDataKFZN: [
        {
          txt: '介绍',
          name: 'jj'
        },
        {
          txt: '使用',
          name: 'yy'
        }
      ],
      leftDataZJ: [
        {
          txt: 'Loading',
          name: 'loading'
        },
        {
          txt: 'LoadingMiddle',
          name: 'loadingMiddle'
        },
        {
          txt: 'Alert',
          name: 'alert'
        },
        {
          txt: 'Toast',
          name: 'toast'
        }
      ],
      iframeUrl: '#/MobileIndex'
    }
  },
  mounted () {
    this.$router.push({
      name: 'jj'
    })
    // window.addEventListener('message', this.handleMessage)
  },
  computed: {
    routeNames: function () {
      let name = this.$route.name
      return this.routeNamesFn(name)
    }
  },
  methods: {
    routeNamesFn (name) {
      // 像子ifarem传递参数
      this.iframeUrl = '#/MobileIndex?name=' + name
      return name
    }
    // 接受子页面iframe发来的信息
    // handleMessage (event) {
    //   var data = event.data
    //   switch (data.cmd) {
    //     case 'returnFormJson':
    //       // 处理业务逻辑
    //       console.log(data)
    //       this.$router.push({
    //         name: data.params.name
    //       })
    //       break
    //   }
    // }
  }
}
</script>
<style lang="scss">
@import "../style/var.scss";
.index {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1600px;
  min-width: 1028px;
  height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  display: flex;
  position: relative;
  .left {
    flex: none;
    width: 260px;
    overflow: hidden;
    overflow-y: auto;
    .leftBox {
      width: 100%;
      height: auto;
      background: #fff;
      box-shadow: 0 2px 2px $boxShadowColor;
      padding: 20px;
      box-sizing: border-box;
    }
    .leftUl {
      width: 100%;
      .tit {
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-weight: bold;
      }
      .current {
        color: $green;
        cursor: pointer;
        font-weight: bold;
      }
      .li {
        width: 100%;
        & > a {
          width: 100%;
          height: 50px;
          line-height: 50px;
          font-size: 15px;
          display: block;
          &:hover {
            color: $green;
            cursor: pointer;
          }
        }
      }
    }
  }
  .middle {
    width: 920px;
    margin: 0 20px;
    box-sizing: border-box;
    flex: none;
    overflow: hidden;
    overflow-y: auto;
    position: relative;
  }
  .right {
    flex: none;
    width: 360px;
    height: auto;
    box-sizing: border-box;
    .iframe {
      width: 100%;
      height: 670px;
    }
  }
}
</style>
