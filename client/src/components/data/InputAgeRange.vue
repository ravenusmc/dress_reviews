<template>
  <div>
    <form @submit="submitSelectedAges">
      <label for="ageOne">First Age Value:</label>
      <input
        type="number"
        id="quantity"
        v-model="ageOne"
        name="ageOne"
        min="0"
        max="100"
      />
      <label for="ageTwo">Second Age Value:</label>
      <input
        type="number"
        id="ageTwo"
        v-model="ageTwo"
        name="ageTwo"
        min="0"
        max="100"
      />
      <button class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "InputAgeRange",
  data() {
    return {
      ageOne: 0,
      ageTwo: 100,
    };
  },
  methods: {
    submitSelectedAges(evt) {
      evt.preventDefault();
      let ageOne = Number(this.ageOne);
      let ageTwo = Number(this.ageTwo);
      const payload = {
        ageOne,
        ageTwo,
			};
			console.log(payload)
    },
  },
};
</script>

<style scoped>
</style>