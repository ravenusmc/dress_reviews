<template>
  <div>
    <form @submit="submitSelectedAges">
      <div class="input-area">
        <label for="ageOne">First Age Value:</label>
        <input type="number" v-model="ageOne" name="ageOne" min="18" max="99" />
        <label for="ageTwo">Second Age Value:</label>
        <input
          type="number"
          id="ageTwo"
          v-model="ageTwo"
          name="ageTwo"
          min="18"
          max="99"
        />
      </div>
      <br />
      <div class="button-div">
        <button class="btn btn-success">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "InputAgeRange",
  data() {
    return {
      ageOne: 18,
      ageTwo: 99,
    };
  },
  computed: {
    ...mapGetters("data", [
      "tableData",
      "firstValue",
      "lastValue",
      "divisionName",
      "departmentName",
      "className",
      "firstAgeValue",
      "secondAgeValue",
    ]),
  },
  methods: {
    ...mapActions("data", ["fetchDataBasedOnAge"]),
    submitSelectedAges(evt) {
      evt.preventDefault();
      let ageOne = Number(this.ageOne);
      let ageTwo = Number(this.ageTwo);
      const payload = {
        tableData: this.tableData,
        ageOne,
        ageTwo,
        firstValue: this.firstValue,
        lastValue: this.lastValue,
        divisionName: this.divisionName,
        departmentName: this.departmentName,
        className: this.className,
      };
      this.fetchDataBasedOnAge({ payload });
    },
    changeFirstAge() {
      this.ageOne = this.firstAgeValue;
    },
    changeSecondAge() {
      this.ageTwo = this.secondAgeValue;
    },
  },
  watch: {
    firstAgeValue: {
      handler(value) {
        if (value) {
          this.changeFirstAge();
        }
      },
      immediate: true,
    },
    secondAgeValue: {
      handler(value) {
        if (value) {
          this.changeSecondAge();
        }
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
form {
  border-bottom: 1px black dotted;
  margin-bottom: 10px;
}

.input-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10% 0 10%;
}

.button-div {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>