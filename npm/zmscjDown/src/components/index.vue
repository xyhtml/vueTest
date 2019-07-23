<template>
  <div class="index">
    <div class="left">
      <div class="leftUl">
        <h3 class="tit">开发指南</h3>
        <div class="li" v-for="(item, index) in leftDataKFZN" :key="index" @click="leftClick(item, index)">
          <router-link :class="{'current': item.name == routeName}" :to="{ name:item.name}">{{item.txt}}</router-link>
        </div>
      </div>
      <div class="leftUl">
        <h3 class="tit">组件</h3>
        <div class="li" v-for="(item, index) in leftDataZJ" :key="index" @click="leftClick(item, index)">
          <router-link :class="{'current': item.name == routeName}" :to="{ name:item.name}">{{item.txt}}</router-link>
        </div>
      </div>
    </div>
    <div class="middle">
      <router-view />
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script>
import { Alert } from 'zms-cj'
import Vue from 'vue'
Vue.use(Alert)
export default {
  data () {
    return {
      routeName: 'Jj',
      leftDataKFZN: [
        {
          txt: '介绍',
          name: 'Jj'
        },
        {
          txt: '使用',
          name: 'Yy'
        }
      ],
      leftDataZJ: [
        {
          txt: 'Loading',
          name: 'Loading'
        },
        {
          txt: 'LoadingMiddle',
          name: 'LoadingMiddle'
        },
        {
          txt: 'Alert',
          name: 'Alert'
        },
        {
          txt: 'Toast',
          name: 'Toast'
        }
      ]
    }
  },
  mounted () {
    this.$router.push({
      name: 'Jj'
    })
  },
  methods: {
    leftClick (itme, index) {
      this.routeName = this.$route.name
    }
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
    .leftUl {
      width: 100%;
      .tit {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 50px;
        font-weight: bold;
      }
      .current {
        color: $green;
        cursor: pointer;
        font-weight: bold;
      }
      .li {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        & > a {
          font-size: 15px;
          &:hover {
            color: $green;
            cursor: pointer;
          }
        }
      }
    }
  }
  .middle {
    width: 905px;
    margin: 0 20px;
    box-sizing: border-box;
    flex: none;
    overflow: hidden;
  }
  .right {
    flex: none;
    width: 375px;
    padding: 20px;
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0 2px 2px $boxShadowColor;
  }
}
</style>
