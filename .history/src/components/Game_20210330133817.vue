<template>
  <h1>The Golden Miner</h1>
  <div class="game">
    <div class="mine">
      <div class="numbers">
        <div class="game-time">{{ time }}</div>
        <div class="exprience">{{ level }} | {{ curExp }}/{{ neededExp }}</div>
        <div class="skills">
          <div class="skill-points">
            Remaining Skill Points: {{ skillPoints }}
          </div>
        </div>
        <div class="gold">Gold: {{ gold }}</div>
        <div class="diamonds">Diamonds: {{ diamonds }}</div>
        <br />
        <div class="stuffPerSecond">
          <p>Gold/s: {{ goldPerSecond }}</p>
          <p>Diamonds/s: {{ diamondsPerSecond }}</p>
          <p>Click Efficiency: {{ clickEfficiency }}</p>
          <p>Magic find/s: {{ magicFind }}</p>
          <p>Experience/s: {{ experiencePerSecond }}</p>
        </div>
      </div>
      <div class="cave-entrance">

      </div>
    </div>
    <div class="buyables">sdfsdfsd</div>
    <div class="player">sdfsdfasdf</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const time = ref("03:29:04");
    const level = ref(1);
    const curExp = ref(50);
    const neededExp = ref(100);
    const skillPoints = ref(4);
    const gold = ref(0);
    const diamonds = ref(0);
    const goldPerSecond = ref(0);
    const diamondPerSecond = ref(0);
    const clickEfficiency = ref(0);
    const magicFind = ref(0);
    const experiencePerSecond = ref(0);
    return {
      time,
      level,
      curExp,
      neededExp,
      skillPoints,
      gold,
      diamonds,
      goldPerSecond,
      clickEfficiency,
      magicFind,
      experiencePerSecond,
    };
  },
});
</script>

<style scoped>
.game {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-auto-rows: 500px; */
  column-gap: 0.2em;
  height: 80vh;
}
.mine {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid black;
}

.cave-entrance {
  border: 2px solid brown;
  height: 40vh;
}

.buyables {
  border: 2px solid red;

}

.player {
  border: 2px solid blue;
}
</style>