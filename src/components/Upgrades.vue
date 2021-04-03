<template>
  <p>Upgrades</p>
  <div v-for="upgrade in upgrades" :key="upgrade.name">
    {{ upgrade }}
    <!-- <button @click="upgrade.effect(state)">Buy</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { upgrades, applyUpgrade } from "../hooks/upgrades"
import { useGame } from '../hooks/game';
export default defineComponent({
  setup() {
    // const { state } = useGame()
    return {
      upgrades,
      applyUpgrade,
      // state
    }
  },
});
</script>

<style scoped>

</style>