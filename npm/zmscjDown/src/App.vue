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
  max-width: 1600px;
  min-width: 1028px;
  height: 100%;
  margin: 0 auto;
  font-size: 16px;
}
</style>
