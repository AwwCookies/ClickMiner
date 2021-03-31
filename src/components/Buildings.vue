<template>
  <div v-for="building of buildings" :key="building.name">
    <b>{{ building.name }}</b>
    <!-- <p>
      Owned: {{ minionsOwned[minion.name] }} | Cost:
      {{ getMinionCost(minion.name) }} gold
    </p> -->
    <button class="btn-info">Info</button>
    <button
      class="btn-fund"
    >
      Fund
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useGame } from "../hooks/game";

export default defineComponent({
  setup() {
    const { buildings } = useGame();

    return { buildings };
  },
});
</script>
