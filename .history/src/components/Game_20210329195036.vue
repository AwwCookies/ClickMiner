<template>
  <h1>The Golden Miner</h1>
  <div class="game">
    <div class="mine"></div>
    <div class="buyables"></div>
    <div class="player"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>

<style scoped>
.mine {
  border: 2px solid black;
}

.buyables {
  border: 2px solid red;
}

.player {
  border: 2px solid blue;
}
</style>