<template>
  <div>
    <h1>Graphs</h1>
    <section>
      <SentimentGraph />
      <RatingsGraph />
    </section>
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
section {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>