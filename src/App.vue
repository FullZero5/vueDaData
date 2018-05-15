<template>
  <div id="app">
    <InnInput/>
  </div>
</template>

<script>
import InnInput from "./components/InputINN";

export default {
  name: "App",
  components: {
    InnInput
  }
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
