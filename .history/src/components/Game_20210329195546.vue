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
.game {
  display: flex;
  justify-content: space-between;
}
.mine {
  border: 2px solid black;
  width: 33%;
  height: 100%;
  min-height: 100em;
}

.buyables {
  border: 2px solid red;
  width: 33%;
  height: 100%;
}

.player {
  border: 2px solid blue;
  width: 33%;
  height: 100%
}
</style>