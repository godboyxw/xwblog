<template>
  <div id="app">
    <v-header></v-header>
    <router-view />
  </div>
</template>

<script>
import vHeader from './components/header'
export default {
  name: 'App',
  components: {
    vHeader
  }
}
</script>

<style>
html {
  font-size: calc(100vw / 19.2);
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
