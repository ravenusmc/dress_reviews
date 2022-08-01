<template>
  <div>
    <section class="main-section">
      <div class="form-area">
        <select @change="onChange($event)" v-model="division_name">
          <option>Please select a Division Name</option>
          <option v-for="division_name in division_names" :key="division_name">
            {{ division_name }}
          </option>
        </select>
      </div>
      <div class="table-area">
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Main",
  components: {
    GraphCard,
  },
  computed: {
    ...mapGetters("data", ["firstGraphDataSetInitial", "division_names"]),
  },
  data() {
    return {
      division_name: "Bottoms",
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
  methods: {
    ...mapActions("data", ["changeSelectionBasedOnDivisionName"]),
    onChange(event) {
      console.log(this.division_name);
      let division_name = this.division_name;
      const payload = {
        division_name,
      };
      this.changeSelectionBasedOnDivisionName({ payload });
    },
  },
  created: function () {
    // console.log("HI Now");
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