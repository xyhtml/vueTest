<template>
  <div class="index">
    <div class="left">
      <div class="leftUl">
        <h3 class="tit">开发指南</h3>
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
    <div class="middle">
      <router-view />
    </div>
    <div class="right">
      <Mobile />
    </div>
  </div>
</template>

<script>
import Mobile from './mobile/index'
import { Alert } from 'zms-cj'
import Vue from 'vue'
Vue.use(Alert)
export default {
  components: {
    Mobile
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
      ]
    }
  },
  mounted () {
    this.$router.push({
      name: 'jj'
    })
  },
  computed: {
    routeNames: function () {
      return this.$route.name
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
@import "../style/var.scss";
.index {
  width: 100%;
  height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  display: flex;
  .left {
    flex: none;
    width: 260px;
    height: 100%;
    background: #fff;
    box-shadow: 0 2px 2px $boxShadowColor;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
    overflow-y: auto;
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
  }
}
</style>
