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
    ...mapGetters("data", ["departmentNames"]),
  },  
  data() {
    return {
      departmentName: "Bottoms",
    };
  }, 
  methods: {
    ...mapActions("data", ["changeSelectionBasedOnDivisionName"]),
    onChange() {
      let departmentName = this.departmentName;
      const payload = {
        departmentName,
      };
      // this.changeSelectionBasedOnDivisionName({ payload });
    },
  },
};
</script>

<style scoped>
</style>