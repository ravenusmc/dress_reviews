<template>
  <div>
    <h1>Ratings Graph</h1>
    <form @submit="submitRatingSelection">
      <label for="ratings">Pick a rating:</label>
      <input type="number" v-model="rating" name="rating" min="1" max="5" />
			<button class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "RatingsGraph",
  data() {
    return {
      rating: 1,
    };
  },
  methods: {
    ...mapActions("data", ["fetchDataBasedOnAge"]),
    submitRatingSelection(evt) {
			evt.preventDefault();
      const payload = {
				ratings: this.rating
			};
			console.log(payload)
      // this.fetchDataBasedOnAge({ payload });
    },
  },
};
</script>

<style scoped>
</style>