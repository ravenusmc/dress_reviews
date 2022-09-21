<template>
  <div>
    <h6>The current data set has {{ dataLength }} rows</h6>
    <p>Showing rows {{ firstValue }} - {{ lastValue }}</p>
    <button
      @click="changeRange('up')"
      type="button"
      class="btn btn-secondary"
      v-if="!hideUpButton"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-up"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        />
      </svg>
    </button>
    <button
      @click="changeRange('down')"
      type="button"
      class="btn btn-secondary"
      v-if="!hideDownButton"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-down"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "",
  data() {
    return {
      // hideUpButton: false,
      // hideDownButton: true,
      // firstValue: 0,
      // secondValue: 20,
    };
  },
  computed: {
    ...mapGetters("data", [
      "tableData",
      "firstValue",
      "lastValue",
      "hideUpButton",
      "hideDownButton",
      "divisionName",
      "departmentName",
      "className",
      "dataLength",
      "firstAgeValue",
      "secondAgeValue",
    ]),
  },
  methods: {
    ...mapActions("data", ["changeDataBasedOnRange", "coverDownButton", "showDownButton"]),
    changeRange(direction) {
      let newFirstValue = 0;
      let newLastValue = 20;

      // if (this.dataLength < this.lastValue) {
      //   this.hideUpButton = true;
      // }

      if (direction === "up" && this.lastValue == 20) {
        newFirstValue = this.firstValue + 20;
        newLastValue = this.lastValue + 20;
        this.showDownButton()
      } else if (this.lastValue > 20) {
        if (this.lastValue - this.firstValue > 0) {
          newLastValue = this.firstValue;
          // this.hideUpButton = false;
          // this.hideDownButton = true;
        } else {
          newFirstValue = this.firstValue - 20;
          newLastValue = this.lastValue - 20;
        }
      }

      if (newFirstValue < 0 || newLastValue < 0) {
        alert("You cannot go less than zero");
      } else if (newLastValue > this.dataLength) {
        newFirstValue = newLastValue - 20;
        newLastValue = this.dataLength;
        // this.hideUpButton = true;
      }

      const payload = {
        newFirstValue,
        newLastValue,
        // originalFirstValue,
        // originalLastValue,
        firstAge: this.firstAgeValue,
        SecondAge: this.secondAgeValue,
        divisionName: this.divisionName,
        departmentName: this.departmentName,
        className: this.className,
      };
      this.changeDataBasedOnRange({ payload });
    },
  },
};
</script>

<style scoped>
</style>