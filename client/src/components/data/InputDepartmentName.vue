<template>
  <div>
    <label for="departmentName">Please select a Department Name:</label>
    <select @change="onChange()" v-model="departmentName">
      <option v-for="departmentName in departmentNames" :key="departmentName">
        {{ departmentName }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "InputDepartmentName",
  computed: {
    ...mapGetters("data", ["departmentNames", "firstValue", "lastValue"]),
  },  
  data() {
    return {
      departmentName: "Bottoms",
    };
  }, 
  methods: {
    ...mapActions("data", ["changeDataBasedOnSingleSelection"]),
    onChange() {
      let selection = this.departmentName;
      const payload = {
        selection,
        column: 'department_name',
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