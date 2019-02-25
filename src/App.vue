<template>
  <div id="app">
    <van-button type="default">默认按钮</van-button>
    我是app页面
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
}
</style>
