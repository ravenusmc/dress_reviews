<template>
  <div>
    <Navbar />
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/generic/Navbar.vue';
export default {
  components: {
    Navbar,
  },
};
</script>

<style>

</style>
