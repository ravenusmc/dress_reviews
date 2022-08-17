<template>
  <div>
    <label for="departmentName">Please select a Department Name:</label>
    <select @change="onChange()" v-model="Name">
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
    ...mapGetters("data", ["departmentNames", "departmentName", "firstValue", "lastValue"]),
  },
  data() {
    return {
      Name: "Bottoms",
    };
  },
  methods: {
    ...mapActions("data", ["changeDataBasedOnSingleSelection"]),
    onChange() {
      let selection = this.Name;
      const payload = {
        selection,
        column: "department_name",
        firstValue: this.firstValue,
        lastValue: this.lastValue,
      };
      this.changeDataBasedOnSingleSelection({ payload });
    },
    changeDepartmentName() {
      this.Name = this.departmentName
    },
  },
  watch: {
    departmentName: {
      handler(value) {
        if (value) {
          this.changeDepartmentName();
        }
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
</style>