<template>
  <div>
    <select @change="onChange($event)" v-model="division_name">
      <option>Please select a Division Name</option>
      <option v-for="division_name in division_names" :key="division_name">
        {{ division_name }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "InputDivisionName",
  computed: {
    ...mapGetters("data", ["division_names"]),
  },  
  data() {
    return {
      division_name: "Bottoms",
    };
  }, 
  methods: {
    ...mapActions("data", ["changeSelectionBasedOnDivisionName"]),
    onChange(event) {
      let division_name = this.division_name;
      const payload = {
        division_name,
      };
      this.changeSelectionBasedOnDivisionName({ payload });
    },
  },
};
</script>

<style scoped>
</style>