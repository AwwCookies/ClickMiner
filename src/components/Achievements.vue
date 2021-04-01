<template>
  <div v-for="achievement of achievements" :key="achievement.name">
    {{ achievement.name }} | 
    {{ achievement.isCompleted() ? '✅' : '❌'}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGame } from "../hooks/game";
export default defineComponent({
  setup() {
    const { achievements } = useGame();

    return { achievements };
  },
});
</script>

<style scoped>
</style>