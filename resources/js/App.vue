<script setup>
import MainHeader from './components/partials/MainHeader.vue'
import MainFooter from './components/partials/MainFooter.vue'
import MainSidebar from './components/partials/MainSidebar.vue'

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
