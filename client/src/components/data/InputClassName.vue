<template>
  <div>
    <p class='center' for="className">Please select a Class Name:</p>
    <div class="drop-down-center">
      <select @change="onChange()" v-model="Name">
        <option v-for="className in classNames" :key="className">
          {{ className }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "InputDepartmentName",
  computed: {
    ...mapGetters("data", [
      "classNames",
      "className",
      "firstValue",
      "lastValue",
    ]),
  },
  data() {
    return {
      Name: "Jeans",
    };
  },
  methods: {
    ...mapActions("data", ["changeDataBasedOnSingleSelection"]),
    onChange() {
      let selection = this.Name;
      const payload = {
        selection,
        column: "class_name",
        firstValue: this.firstValue,
        lastValue: this.lastValue,
      };
      this.changeDataBasedOnSingleSelection({ payload });
    },
    changeClassName() {
      this.Name = this.className;
    },
  },
  watch: {
    className: {
      handler(value) {
        if (value) {
          this.changeClassName();
        }
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
</style>