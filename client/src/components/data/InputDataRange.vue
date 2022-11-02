<template>
  <div>
    <section>
      <h6 class='center'>The current data set has {{ dataLength }} rows</h6>
      <p class='center'>Showing rows {{ firstValue }} - {{ lastValue }}</p>
      <div class='button-div'>
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
    </section>
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
    ...mapActions("data", [
      "changeDataBasedOnRange",
      "showUpButton",
      "coverUpButton",
      "coverDownButton",
      "showDownButton",
    ]),
    changeRange(direction) {
      let newFirstValue = 0;
      let newLastValue = 20;

      if (direction === "up") {
        newFirstValue = this.firstValue + 20;
        newLastValue = this.lastValue + 20;
        this.showDownButton();
        // console.log('1')
      } else if (direction === "down" && this.firstValue - 20 == 0) {
        this.coverDownButton();
        // console.log('2')
      } else if (
        direction === "down" &&
        this.lastValue - this.dataLength < 20
      ) {
        newFirstValue = this.firstValue - 20;
        newLastValue = newFirstValue + 20;
        this.showUpButton()
        // console.log('3')
      } else if (direction === "down") {
        newFirstValue = this.firstValue - 20;
        newLastValue = this.lastValue - 20;
        // console.log('4')
      }

      if (newLastValue > this.dataLength) {
        newFirstValue = newLastValue - 20;
        newLastValue = this.dataLength;
        this.coverUpButton();
        // console.log('HERE')
      }

      if (newFirstValue == 0 && newLastValue == 20) {
        this.showUpButton();
      }

      const payload = {
        newFirstValue,
        newLastValue,
        firstAge: this.firstAgeValue,
        SecondAge: this.secondAgeValue,
        divisionName: this.divisionName,
        departmentName: this.departmentName,
        className: this.className,
        dataLength: this.dataLength,
      };
      this.changeDataBasedOnRange({ payload });
    },
  },
};
</script>

<style scoped>
section {
  border-top: 1px black dotted;
  border-bottom: 1px black dotted;
  margin-bottom: 10px;
}

h6 {
  margin-top: 5px;
}

.button-div {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>