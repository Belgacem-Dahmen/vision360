<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <!-- Footer pour les utilisateurs authentifiés -->
    </footer>
  </div>
</template>


<script setup>
import Navbar from '../components/Navbar.vue';


</script>

<style lang="scss" scoped></style>