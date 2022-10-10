<template>
  <div>
    <GChart :type="typeOne" :data="ratingOneWords" :options="chartOptionsOne" />
    <form @submit="submitRatingSelection">
      <label for="ratings">Pick a rating:</label>
      <input type="number" v-model="rating" name="rating" min="1" max="5" />
      <button class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import GraphCard from "@/components/Graphs/GraphCard.vue";

export default {
  name: "RatingsGraph",
  components: {
    GraphCard,
  },
  computed: {
    ...mapGetters("text", ["ratingOneWords", "ratingTwoWords"]),
  },
  data() {
    return {
      rating: 1,
      typeOne: "ColumnChart",
      chartOptionsOne: {
        title: "Common Words by Rating",
        legend: { position: "top" },
        colors: ["#50A8F1"],
        height: 500,
        width: 650,
        vAxes: {
          0: { title: "Word Count" },
        },
        hAxes: {
          0: { title: "Word" },
        },
        animation: {
          duration: 1000,
          easing: "linear",
        },
        vAxis: {
          viewWindow: {
            min: 0,
          },
        },
      },
    };
  },
  methods: {
    ...mapActions("data", ["fetchDataBasedOnAge"]),
    submitRatingSelection(evt) {
      evt.preventDefault();
      const payload = {
        ratings: this.rating,
      };
      console.log(payload);
      // this.fetchDataBasedOnAge({ payload });
    },
  },
};
</script>

<style scoped>
</style>