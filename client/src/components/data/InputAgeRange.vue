<template>
  <div>
    <form @submit="submitSelectedAges">
      <label for="ageOne">First Age Value:</label>
      <input
        type="number"
        id="quantity"
        v-model="ageOne"
        name="ageOne"
        min="18"
        max="99"
      />
      <label for="ageTwo">Second Age Value:</label>
      <input
        type="number"
        id="ageTwo"
        v-model="ageTwo"
        name="ageTwo"
        min="18"
        max="99"
      />
      <button class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "InputAgeRange",
  data() {
    return {
      ageOne: 18,
      ageTwo: 99,
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
    submitSelectedAges(evt) {
      evt.preventDefault();
      let ageOne = Number(this.ageOne);
      let ageTwo = Number(this.ageTwo);
      const payload = {
        tableData: this.tableData,
        ageOne,
        ageTwo,
        firstValue: this.firstValue,
        lastValue: this.lastValue,
        divisionName: this.divisionName,
        departmentName: this.departmentName,
        className: this.className,
      };
      this.fetchDataBasedOnAge({ payload });
    },
  },
};
</script>

<style scoped>
</style>