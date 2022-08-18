<template>
	<div>
		<div class='button-div'>
			<button @click="resetData()" type="button" class="btn btn-dark">Reset To Initial Data</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "ResetInitialData",
	methods: {
    resetData() {
			console.log('Hi')
      // let selection = this.Name;
      // const payload = {
      //   selection,
      //   column: "class_name",
      //   firstValue: this.firstValue,
      //   lastValue: this.lastValue,
      // };
      // this.changeDataBasedOnSingleSelection({ payload });
    },
  },
}
</script>

<style scoped>

.button-div {
	margin: 10px 0 10px 0;
	text-align: center;
}

</style>