<template>
  <div id="nav">
    <router-link to="/hello">[HelloWorld]</router-link>
    |
    <router-link to="/testcom">[TestCom api]</router-link>
    |
    <router-link to="/testop">[TestOp api]</router-link>
    |
    <router-link to="/testopSet">[TestOpSet api]</router-link>
    |
    <router-link to="/testTable">[TestTable]</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
