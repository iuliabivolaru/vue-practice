<template>
  <div id="app">
   <router-link to="/home">
      Home
    </router-link>
    <router-link to="/">
      About
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {

    }
  }
};
</script>

<style>
</style>
