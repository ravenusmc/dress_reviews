<template>
  <div>
    <Jumbotron />
    <Main />
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from "@/components/landing/Jumbotron.vue";
import Main from "@/components/landing/Main.vue";

export default {
  name: "HomeView",
  components: {
    Jumbotron,
    Main,
  },
};
</script>

<style lang="css" scoped>
.jumbotron-image {
  background-image: url("../assets/images/jumbo.jpg");
  height: 600px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.mask {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
