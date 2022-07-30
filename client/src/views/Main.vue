<template>
  <div>
    <GraphCard
      :typeOne="typeOne"
      :data="firstGraphDataSetInitial"
      :options="chartOptionsOne"
    />
    <p>main</p>
  </div>
</template>

<script>
import GraphCard from "@/components/Graphs/GraphCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "Main",
  components: {
    GraphCard,
  },
  computed: {
    ...mapGetters("data", ["firstGraphDataSetInitial"]),
  },
  data() {
    return {
      typeOne: "ColumnChart",
      chartOptionsOne: {
        title: "Statues in North Vs South",
        legend: { position: "top" },
        colors: ["#f24867"],
        height: 500,
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
};
</script>

<style scoped>
</style>