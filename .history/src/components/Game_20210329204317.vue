<template>
  <h1>The Golden Miner</h1>
  <div class="game">
    <div class="mine">
      <div class="game-time">{{ time }}</div>
      <div class="exprience">{{ level }} | {{ curExp }}/{{ neededExp }}</div>
      <div class="skills">
        <div class="skill-points">Remaining Skill Points: {{ skillPoints }}</div>
      </div>
    </div>
    <div class="buyables">sdfsdfsd</div>
    <div class="player">sdfsdfasdf</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const time = ref("03:29:04")
    const level = ref(1)
    const curExp = ref(50)
    const neededExp = ref(100)
    return {
      time,
      level,
      curExp,
      neededExp
    }
  },
})
</script>

<style scoped>
.game {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-auto-rows: 500px; */
  column-gap: 0.2em;
  height: 100%;
}
.mine {
  border: 2px solid black;
  height: 100%;
  min-height: 100%;
}

.buyables {
  border: 2px solid red;
  height: 100%;
}

.player {
  border: 2px solid blue;
  height: 100%
}
</style>