<template>
  <div>
    {{ achievements }}
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