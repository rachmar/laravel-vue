<script setup>
import Footer from '../partials/Footer.vue';
import Header from '../partials/Header.vue';
import Sidebar from '../partials/Sidebar.vue';

</script>

<template>
    <div class="hold-transition sidebar-mini">
        <div class="wrapper">
            <Header />
            <Sidebar />
            <div class="content-wrapper">
                <div class="content p-3">
                    <slot />
                </div>
            </div>
            <Footer />
        </div>
    </div>
</template>

<style scoped></style>
