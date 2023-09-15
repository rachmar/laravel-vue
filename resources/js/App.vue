<script setup>
import MainHeader from './components/main/MainHeader.vue'
import MainFooter from './components/main/MainFooter.vue'
import MainSidebar from './components/main/MainSidebar.vue'

import { RouterView } from 'vue-router'
</script>

<template>
<div class="wrapper">
  <MainHeader />
  <MainSidebar />
  <RouterView />
  <MainFooter />
</div>
</template>

<style scoped>
</style>
