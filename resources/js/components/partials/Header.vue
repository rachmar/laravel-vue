<script setup>
import { useAuthStore } from '../../stores/auth'

const authStore = useAuthStore();

const handleLogout = async () => {
    console.log(123);
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
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-user"></i> &nbsp; Profile
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-danger" @click.prevent="handleLogout">
                    <i class="fas fa-sign-out-alt"></i> &nbsp; Logout
                </a>
            </li>
        </ul>
    </nav>
</template>

<style scoped></style>
