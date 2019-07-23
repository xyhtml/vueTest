<template>
  <div class="js">
    <div class="Tit">
      <h3>zmscj</h3>
      <span>筑民生内部项目常用插件</span>
    </div>
    <div class="Com">
      <p>感谢UI统一项目风格，才让前端走上了统一插件的道路上，望俺们前端兄弟珍惜机会，发扬我们筑民生插件，让我们写更少的代码，做更多的事情。</p>
      <p>说明书页面没有对接UI，就长这个样子，大家将就看吧，毕竟一个前端来搞UI还是很辛苦了的。一个人的力量是薄弱的，望前端战壕兄弟们也加入其中，至少可以让我的头发掉慢一点的嘛。</p>
    </div>
  </div>
</template>
<style lang="scss">
@import "../../style/function.scss";
.js {
  width: 100%;
  height: 100%;
  line-height: 24px;
  .Tit {
    & > h3 {
      padding: 0;
      font-weight: bold;
    }
  }
  .Com {
    @include backAndBox;
    & > p {
      text-indent: 2rem;
    }
  }
}
</style>
