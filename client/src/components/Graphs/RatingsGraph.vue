<template>
  <div>
    <GChart
      :type="typeOne"
      :data="currentSelectedWords"
      :options="chartOptionsOne"
    />
    <form @submit="submitRatingSelection">
      <div class="input-div">
        <label for="ratings">Pick a rating:</label>
        <input type="number" v-model="rating" name="rating" min="1" max="4" />
        <button class="btn btn-success">Submit</button>
      </div>
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
    ...mapGetters("text", ["currentSelectedWords"]),
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
    ...mapActions("text", ["changeRatingsValue"]),
    submitRatingSelection(evt) {
      evt.preventDefault();
      const payload = {
        ratings: Number(this.rating),
      };
      this.changeRatingsValue({ payload });
    },
  },
  beforeMount() {
    const payload = {
      ratings: 1,
    };
    if (this.currentSelectedWords.length === 0) {
      this.changeRatingsValue({ payload });
    }
  },
};
</script>

<style scoped>
.input-div {
  display: flex; 
  justify-content: center;
  margin-bottom: 5%;
}

button {
  margin-left: 15px;
}
</style>