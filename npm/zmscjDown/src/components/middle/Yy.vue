<template>
  <div class="Yy">
    <div class="Tit">
      <h3>安装</h3>
      <div class="ts">cnpm install zms-cj</div>
    </div>
    <div class="Tit">
      <h3>引用</h3>
      <div class="code">
        <h3 class="ts">自动按需引入组件(目前只提供这种方式)</h3>
        <p><a class="link" href="https://github.com/ant-design/babel-plugin-import">babel-plugin-import</a> 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式</p>
        <pre class="pre">
        <span class="ts"># 安装插件</span>
        npm i babel-plugin-import -D
        <span class="ts">// 在.babelrc 中添加配置</span>
        {
          "plugins": [
            ["import", {
              "libraryName": "zms-cj",
              "libraryDirectory": "lib"
            }]
          ]
        }</pre>
        <span class="ts">ps: 不可全局引入（main.js引入无效）</span>
      </div>
    </div>
    <div class="Tit">
      <h3>使用</h3>
      <div class="code">
        <span class="ts">在需要的组件内引用</span>
        <pre class="pre">
        import { Loadgin, Alert } from 'zms-cj'
        Vue.use(Loadgin).use(Alert)</pre>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../../style/var.scss";
.Yy {
  width: 100%;
  height: 100%;
  line-height: 24px;
  .link {
    color: $green;
    text-decoration: underline;
  }
}
</style>
