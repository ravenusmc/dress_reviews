<template>
  <div>
    <label for="divisionName">Please select a Division Name:</label>
    <select @change="onChange()" v-model="Name">
      <option v-for="divisionName in divisionNames" :key="divisionName">
        {{ divisionName }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "InputDivisionName",
  computed: {
    ...mapGetters("data", [
      "divisionNames",
      "divisionName",
      "firstValue",
      "lastValue",
    ]),
  },
  data() {
    return {
      Name: "General",
    };
  },
  methods: {
    ...mapActions("data", ["changeDataBasedOnSingleSelection"]),
    onChange() {
      let selection = this.Name;
      const payload = {
        selection,
        column: "division_name",
        firstValue: this.firstValue,
        lastValue: this.lastValue,
      };
      this.changeDataBasedOnSingleSelection({ payload });
    },
    changeDivisionName() {
      this.Name = this.divisionName;
    },
  },
  watch: {
    divisionName: {
      handler(value) {
        if (value) {
          console.log('here CHNAGE')
          this.changeDivisionName();
        }
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
</style>