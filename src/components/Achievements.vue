<template>
  <div v-for="achievement of achievements" :key="achievement">
    {{ achievement }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useGame } from "../hooks/game";
export default defineComponent({
  setup() {
    const { earnedAchievements, events } = useGame();
    return { achievements: earnedAchievements };
  },
});
</script>

<style scoped>
</style>