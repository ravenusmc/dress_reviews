<template>
  <div>
    <label for="divisionName">Please select a Division Name:</label>
    <select @change="onChange()" v-model="divisionName">
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
    ...mapGetters("data", ["divisionNames", "firstValue", "lastValue"]),
  },
  data() {
    return {
      divisionName: "General",
    };
  },
  methods: {
    ...mapActions("data", ["changeDataBasedOnSingleSelection"]),
    onChange() {
      let selection = this.divisionName;
      const payload = {
        selection,
        column: 'division_name',
        firstValue: this.firstValue,
        lastValue: this.lastValue,
      };
      this.changeDataBasedOnSingleSelection({ payload });
    },
  },
};
</script>

<style scoped>
</style>