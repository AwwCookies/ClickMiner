<template>
  <div v-for="minion of minions" :key="minion.name">
    <b>{{ minion.name }}</b>
    <p>Owned: {{ minionsOwned[minion.name] }} | Cost: {{ formatNumber(getMinionCost(minion.name)) }} gold</p>
    <button class="btn-info">Info</button>
    <button class="btn-buy" @click="buyMinion(minion.name)" :disabled="!canBuyMinion(minion.name)">Buy</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useGame } from "../hooks/game" 
import { formatNumber } from "../hooks/utilities"

export default defineComponent({
  setup() {
    const game = useGame()

    return {
      "minions": game.minions,
      "buyMinion": game.buyMinion,
      "minionsOwned": game.minionsOwned.value,
      "getMinionCost": game.getMinionCost,
      "canBuyMinion": game.canBuyMinion,
      formatNumber
    }
  },
})
</script>
