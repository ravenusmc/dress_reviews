<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Examining Dresses</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
					<li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "navbar",
  data() {
    return {
      showNav: false,
    };
  },
  // computed: {
  //   ...mapGetters('common', ['loginFlag']),
  // },
  // methods: {
  //   ...mapActions(['common/logout']),
  //   logout: function () {
  //     this.$store.dispatch('common/logout');
  //   },
  // },
};
</script>

<style scoped>
.fix {
  margin-right: 10px;
}
.fontColor {
  color: blue;
  font-weight: bolder;
  text-transform: uppercase;
}
</style>