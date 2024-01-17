<script>
import { RouterView } from "vue-router";
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: ubuntu;
  background-color: rgba(255, 255, 255, 0.8);
  height: 100vh;
  overflow-y: hidden;
}
</style>
