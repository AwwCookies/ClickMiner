<template>
  <div v-for="building of buildings" :key="building.name">
    <b>{{ building.name }}</b>
    <p>
      Funding: {{ funding[building.name] }} | Cost:
      {{ formatNumber(getBuildingCost(building)) }} {{ building.currency }}
    </p>
    <button class="btn-info">Info</button>
    <button
      v-text="building.name.includes('Temple') ? 'Sacrifice' : 'Fund'"
      class="btn-fund"
      :disabled="!canAffordBuilding(building)"
      @click="fundBuilding(building)"
    ></button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useGame } from "../hooks/game";
import { formatNumber } from "../hooks/utilities"
export default defineComponent({
  setup() {
    const {
      buildings,
      fundBuilding,
      canAffordBuilding,
      funding,
      getBuildingCost,
    } = useGame();

    for (const building of buildings) {
      console.log(getBuildingCost(building));
    }

    return {
      buildings,
      fundBuilding,
      canAffordBuilding,
      getBuildingCost,
      funding,
      formatNumber,
    };
  },
});
</script>
