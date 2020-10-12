<template>
  <div id="app">
    <img src="./assets/dryflower.jpg" width="200">
    <h1>Todo Management.</h1>
    <hr />
    <router-link to="/" class="link" exact-active-class="exact-active-link">Todo作成</router-link>
    <router-link to="/doneList" class="link" exact-active-class="exact-active-link">Done</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.link{
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>