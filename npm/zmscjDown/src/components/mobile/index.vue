<template>
  <div class="mobile">
    <div class="title">
      <div class="titBox Titleft">
        <div class="icon" v-show="TitLeftShow" @click="backFn">
          <i></i>
        </div>
      </div>
      <div class="titBox Titmiddle" v-show="TitLeftShow">{{names}}</div>
      <div class="titBox Titmiddle" v-show="!TitLeftShow">示例</div>
      <div class="titBox Titright"></div>
    </div>
    <div class="com">
      <div class="comList" v-show="!TitLeftShow">
        <div class="li" v-for="(item, index) in CjList" :key="index" @click="cjListFn(item)">
          <span>{{item.txt}}</span>
          <i class="jt"></i>
        </div>
      </div>
      <div class="components" v-if="currentView">
        <component :is="currentView"></component>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from './loading'
import LoadingMiddle from './loadingMiddle'
import Alert from './alert'
import Toast from './toast'
export default {
  components: {
    Loading,
    LoadingMiddle,
    Alert,
    Toast
  },
  data () {
    return {
      CjList: [
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
      ],
      TitLeftShow: false,
      currentView: '',
      parentUrl: ''
    }
  },
  created () {
    this.parentUrl = window.parent.location.href.split('#')[0] + '#/'
  },
  mounted () {
    document.getElementsByTagName('body')[0].className = 'mobileBody'
  },
  watch: {
  },
  computed: {
    names: function () {
      let name = this.$route.query.name
      return this.isRouteName(name)
    }
  },
  methods: {
    backFn () {
      // this.$router.go(-1)
      window.parent.location.href = this.parentUrl + 'jj'
    },
    isRouteName (name) {
      if (name === 'jj' || name === 'yy') {
        this.TitLeftShow = false
        this.currentView = ''
      } else {
        this.TitLeftShow = true
        this.currentView = name
      }
      return name
    },
    cjListFn (item) {
      window.parent.location.href = this.parentUrl + item.name
      this.isRouteName(item.name)
      // window.parent.postMessage({
      //   cmd: 'returnFormJson',
      //   params: {
      //     name: item.name
      //   }
      // }, '*')
    }
  }
}
</script>

<style lang="scss">
@import "../../style/var.scss";
@import "../../style/function.scss";
.mobile {
  width: 100%;
  background: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 2px 3px $boxShadowColor;
  overflow: hidden;
  ::-webkit-scrollbar {
    background-color: #fff;
  }
  ::-webkit-scrollbar-thumb:end {
    display: none; /*隐藏滚轮*/
  }
  .title {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    background: #fff;
    border-bottom: 1px solid $borderColor;
    border-radius: 10px 10px 0 0;
    .titBox {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Titleft {
      flex: none;
      width: 50px;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        cursor: pointer;
        & > i {
          @include jt;
          transform: rotate(225deg);
        }
      }
    }
    .Titmiddle {
      flex: none;
      width: 250px;
    }
    .Titright {
      flex: none;
      width: 50px;
    }
  }
  .com {
    width: 100%;
    height: 600px;
    overflow: hidden;
    overflow-y: auto;
    border-radius: 0 0 10px 10px;
    .comList {
      width: 100%;
      padding: 0 0 0 10px;
      background: #fff;
      .li {
        padding: 0 15px 0 0;
        box-sizing: border-box;
        width: 100%;
        height: 55px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid $borderColor;
        &:last-child {
          border: none;
        }
        &:hover {
          cursor: pointer;
        }
        & > span {
          font-size: 15px;
          display: inline-block;
        }
        .jt {
          @include jt;
        }
      }
    }
    .components {
      width: 100%;
      height: 600px;
      position: relative;
    }
  }
}
</style>
