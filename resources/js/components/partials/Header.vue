<script setup>
import { useAuthStore } from '../../stores/auth'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter();
const authStore = useAuthStore();

const handleLogout = async () => {

    await authStore.logout();

    router.push({ name: 'login'});
    
}
</script>

<template>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button">
                    <i class="fas fa-bars"></i>
                </a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <RouterLink :to="{name:'home'}" class="nav-link"><i class="fas fa-home"></i> &nbsp; Home</RouterLink>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <RouterLink :to="{name:'home'}" class="nav-link"><i class="fas fa-user"></i> &nbsp; Profile</RouterLink>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link text-danger cursor-pointer" role="button" @click.prevent="handleLogout">
                    <i class="fas fa-sign-out-alt"></i> &nbsp; Logout
                </a>
            </li>
        </ul>
    </nav>
</template>

<style scoped></style>
