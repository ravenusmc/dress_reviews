<template>
  <div>
    <form @submit="submitDataRange">
      <label for="firstValue">First Value:</label>
      <input type="number" v-model="firstValue" name="firstValue" />
      <label for="secondValue">Second Value:</label>
      <input type="number" v-model="secondValue" name="secondValue" />
      <button class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "",
  data() {
    return {
      firstValue: 0,
      secondValue: 20,
    };
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
  },
};
</script>

<style scoped>
</style>