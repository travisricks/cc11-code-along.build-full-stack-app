<template>
  <div id="app">
    <h1>{{ data }}</h1>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

import axios from "axios";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data: () => ({
    data: null
  }),
  mounted() {
    axios.get("/api").then(response => {
      this.data = response.data;
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
