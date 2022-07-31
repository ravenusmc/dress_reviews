<template>
  <div>
    <section class='main-section'>
      <div class='form-area'></div>
      <div class='table-area'>
        <GraphCard
      :typeOne="typeOne"
      :data="firstGraphDataSetInitial"
      :options="chartOptionsOne"
    />
      </div>
    </section>
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

.main-section {
	display: grid;
	grid-template-columns: 20% 80%;
}

.form-area {
	border: 2px solid red;
}

.table-area {
	border: 2px solid blue;
}
</style>