<template>
    <nav class="nav">
        <p>logo</p>
        <button @click="logout"> logout</button>
    </nav>
</template>

<script setup>

import { useRouter } from 'vue-router';
const router = useRouter()

const logout = () => {
    localStorage.removeItem('auth')
    router.push({ name: 'Login' });
}
</script>

<style  scoped>
.nav {
    display: flex;
    min-width: 100%;
    justify-content: space-between;
    background-color: gray;
}
</style>