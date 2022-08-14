<template>
  <div>
    <label for="className">Please select a Class Name:</label>
    <select @change="onChange()" v-model="className">
      <option v-for="className in classNames" :key="className">
        {{ className }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "InputDepartmentName",
  computed: {
    ...mapGetters("data", ["classNames", "firstValue", "lastValue"]),
  },
  data() {
    return {
      className: "Jeans",
    };
  },
  methods: {
    ...mapActions("data", ["changeDataBasedOnSingleSelection"]),
    onChange() {
      let selection = this.departmentName;
      const payload = {
        selection,
        column: "class_name",
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