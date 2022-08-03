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
    ...mapGetters("data", ["divisionNames"]),
  },
  data() {
    return {
      divisionName: "General",
    };
  },
  methods: {
    ...mapActions("data", ["changeSelectionBasedOnDivisionName"]),
    onChange() {
      let divisionName = this.divisionName;
      const payload = {
        divisionName,
      };
      this.changeSelectionBasedOnDivisionName({ payload });
    },
  },
};
</script>

<style scoped>
</style>