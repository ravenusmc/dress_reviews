<template>
  <div>
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/generic/Navbar.vue';
import Footer from '@/components/generic/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>

.center {
  text-align: center;
}

</style>
