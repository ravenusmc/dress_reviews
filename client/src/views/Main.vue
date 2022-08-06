<template>
  <div>
    <section class="main-section">
      <div class="form-area">
        <InputDivisionName />
        <InputDepartmentnName />
      </div>
      <div class="table-area">
        <GraphCard
          :typeOne="typeOne"
          :data="tableData"
          :options="chartOptionsOne"
        />
      </div>
    </section>
  </div>
</template>

<script>
import GraphCard from "@/components/Graphs/GraphCard.vue";
import InputDivisionName from "@/components/data/InputDivisionName.vue";
import InputDepartmentnName from "@/components/data/InputDepartmentName.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Main",
  components: {
    GraphCard,
    InputDivisionName,
    InputDepartmentnName,
  },
  computed: {
    ...mapGetters("data", ["tableData", "division_names", "InputDepartmentnName"]),
  },
  data() {
    return {
      division_name: "Bottoms",
      typeOne: "Table",
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
    ...mapActions("data", ["fetchInitialTableData"]),
  },
  created() {
      const payload = {
        name: 'Mike'
      };
    this.fetchInitialTableData({ payload })
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