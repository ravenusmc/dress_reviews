<template>
  <div>
    <section class="main-section">
      <div class="form-area">
        <ResetInitialData />
        <InputDataRange />
        <InputAgeRange />
        <div class='column-select-area'>
          <InputDivisionName />
          <InputDepartmentName />
          <InputClassName />
        </div>
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
import ResetInitialData from "@/components/data/ResetInitialData.vue";
import InputDataRange from "@/components/data/InputDataRange.vue";
import InputAgeRange from "@/components/data/InputAgeRange.vue";
import InputDivisionName from "@/components/data/InputDivisionName.vue";
import InputDepartmentName from "@/components/data/InputDepartmentName.vue";
import InputClassName from "@/components/data/InputClassName.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Main",
  components: {
    GraphCard,
    ResetInitialData,
    InputDataRange,
    InputAgeRange,
    InputDivisionName,
    InputDepartmentName,
    InputClassName,
  },
  computed: {
    ...mapGetters("data", [
      "tableData",
      "division_names",
      "departmentName",
      "firstValue",
      "lastValue",
    ]),
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
      firstValue: this.firstValue,
      lastValue: this.lastValue,
    };
    this.fetchInitialTableData({ payload });
  },
};
</script>

<style scoped>
.main-section {
  display: grid;
  grid-template-columns: 20% 80%;
}

.form-area {
  border: 2px solid black;
}

.table-area {
  border: 2px solid black;
}

.column-select-area {
  margin-bottom: 10px;
}
</style>