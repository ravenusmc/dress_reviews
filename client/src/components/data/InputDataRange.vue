<template>
  <div>
    <form @submit="submitDataRange">
      <p>{{ firstValue }}</p>
      <p>{{ lastValue }}</p>
      <button @click="changeRange('up')" type="button" class="btn btn-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
          />
        </svg>
      </button>
      <button @click="changeRange('down')" type="button" class="btn btn-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          />
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "",
  data() {
    return {
      // firstValue: 0,
      // secondValue: 20,
    };
  },
  computed: {
    ...mapGetters("data", [
      "tableData",
      "firstValue",
      "lastValue",
      "divisionName",
      "departmentName",
      "className",
    ]),
  },
  methods: {
    ...mapActions("data", ["fetchDataBasedOnAge"]),
    submitDataRange(evt) {
      evt.preventDefault();
      let firstValue = Number(this.firstValue);
      let secondValue = Number(this.secondValue);
      // const payload = {
      //   tableData: this.tableData,
      //   ageOne,
      //   ageTwo,
      //   firstValue: this.firstValue,
      //   lastValue: this.lastValue,
      //   divisionName: this.divisionName,
      //   departmentName: this.departmentName,
      //   className: this.className,
      // };
      // this.fetchDataBasedOnAge({ payload });
    },
    changeRange(direction) {
      console.log('HI')
      console.log(direction)
    }
  },
};
</script>

<style scoped>
</style>