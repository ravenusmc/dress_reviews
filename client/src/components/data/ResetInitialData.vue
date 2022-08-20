<template>
  <div>
    <div class="button-div">
      <button @click="resetData()" type="button" class="btn btn-dark">
        Reset To Initial Data
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ResetInitialData",
  computed: {
    ...mapGetters("data", ["firstValue", "lastValue"]),
  },
  methods: {
    ...mapActions("data", ["fetchInitialTableData"]),
    resetData() {
      const payload = {
        firstValue: this.firstValue,
        lastValue: this.lastValue,
      };
      this.fetchInitialTableData({ payload });
    },
  },
};
</script>

<style scoped>
.button-div {
  margin: 10px 0 10px 0;
  text-align: center;
}
</style>