<template>
  <div>
    <div class="p-5 text-center bg-image rounded-3 jumbotron-image">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.6)">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3">Examining Dresses</h1>
            <h4 class="mb-3">A Simple Study</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {},
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
</style>
