<template>
  <div>
    <GChart :type="typeOne" :data="sentiment" :options="chartOptionsOne" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GraphCard from "@/components/Graphs/GraphCard.vue";

export default {
  name: "SentimentCard",
  components: {
    GraphCard,
  },
  computed: {
    ...mapGetters("text", ["sentiment"]),
  },
  data() {
    return {
      typeOne: "ColumnChart",
      chartOptionsOne: {
        title: "Sentiment by Rating",
        legend: { position: "top" },
        colors: ["#50A8F1"],
        height: 500,
        width: 650,
        vAxes: {
          0: { title: "Sentiment" },
        },
        hAxes: {
          0: { title: "Rating" },
        },
        animation: {
          duration: 1000,
          easing: "linear",
        },
        vAxis: {
          viewWindow: {
            min: 0,
          },
        },
      },
    };
  },
};
</script>