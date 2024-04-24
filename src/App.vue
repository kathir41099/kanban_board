<script setup>
import { RouterView } from 'vue-router'
import Header from './views/Header/header.vue'
</script>

<template>
  <div class="wrapper">
    <Header />
  </div>

  <RouterView />
</template>
<style scoped>
.wrapper {
  margin-bottom: 70px;
}
</style>
