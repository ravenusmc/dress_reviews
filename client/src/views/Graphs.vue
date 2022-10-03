<template>
  <div>
    <h1>Graphs</h1>
		<SentimentGraph />
    <RatingsGraph />
    <!-- Need a graph showing the common words by graph rating 
			-This graph will change based off the rating that the user selects. 
		Need a graph showing the common sentiment by rating 
		rating - 1 - sentiment: X
		rating - 2 - sentiment: A... -->
  </div>
</template>

<script>
import SentimentGraph from "@/components/Graphs/SentimentGraph";
import RatingsGraph from "@/components/Graphs/RatingsGraph";

export default {
  name: "Graphs",
  components: {
    SentimentGraph,
    RatingsGraph,
  },
};
</script>

<style scoped>
</style>