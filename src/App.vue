<template>
  <div id="app">
    <vue-canvas-nest></vue-canvas-nest>
    <router-view/>
  </div>
</template>

<script>
// 动态背景
import vueCanvasNest from 'vue-canvas-nest'
export default {
  name: 'App',
  components: { vueCanvasNest }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  body{
  }
</style>
