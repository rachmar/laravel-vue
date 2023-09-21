<script setup>
import Footer from '../partials/Footer.vue'
import Header from '../partials/Header.vue'
import Sidebar from '../partials/Sidebar.vue'

import { RouterView } from 'vue-router'

</script>

<template>
    <div class="wrapper">
        <Header />
        <Sidebar />
        <div class="content-wrapper">
            <div class="content p-3">
                <RouterView />
            </div>
        </div>
        <Footer />
    </div>
</template>

<style scoped>
</style>
