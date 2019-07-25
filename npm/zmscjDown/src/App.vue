<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "./style/rest.scss";
@import "./style/com.scss";
#app {
  width: 100%;
  height: 100%;
  font-size: 16px;
}
</style>
