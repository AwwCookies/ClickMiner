<template>
  <h1>The Golden Miner</h1>
  <div class="game">
    <div class="mine">
      <div class="numbers">
        <div class="game-time">{{ time }}</div>
        <div class="exprience xpbar"">
          <div class="progress" :data-label="xpbar">
            <span class="value" :style="{ width: xpbarProgress }"></span>
          </div>
        </div>
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
      <div class="cave-entrance" @click="mineClicked"></div>
    </div>
    <div class="buyables">sdfsdfsd</div>
    <div class="player">sdfsdfasdf</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  setup() {
    const time = ref("03:29:04");
    const level = ref(1);
    const curExp = ref(50);
    const neededExp = ref(200);
    const skillPoints = ref(4);
    const gold = ref(0);
    const diamonds = ref(0);
    const goldPerSecond = ref(0);
    const diamondsPerSecond = ref(0);
    const clickEfficiency = ref(0);
    const magicFind = ref(0);
    const experiencePerSecond = ref(0);

    function mineClicked() {
      gold.value++;
    }

    const xpbar = computed(() => {
      return `Level: ${level.value} Experience: ${curExp.value}/${neededExp.value}`;
    });

    const xpbarProgress = computed(() => {
      return `${(curExp.value / neededExp.value) * 100}%`;
    });

    return {
      time,
      level,
      curExp,
      neededExp,
      skillPoints,
      gold,
      diamonds,
      goldPerSecond,
      diamondsPerSecond,
      clickEfficiency,
      magicFind,
      experiencePerSecond,
      mineClicked,
      xpbar,
      xpbarProgress,
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
  background-image: url("http://pixelartmaker.com/art/1ce310b0b7af71f.png");
  background-position: center;
  background-size: cover;
  border: 2px solid brown;
  height: 50%;
}

.buyables {
  border: 2px solid red;
}

.player {
  border: 2px solid blue;
}

.xpbar {
  margin: 0 auto;
}

/* progress bar stuff */
.progress {
  height: 1.5em;
  width: 100%;
  background-color: #c9c9c9;
  position: relative;
  text-align: left;
}
.progress:before {
  content: attr(data-label);
  font-size: 0.8em;
  position: absolute;
  text-align: center;
  top: 5px;
  left: 0;
  right: 0;
}
.progress .value {
  background-color: #7cc4ff;
  display: inline-block;
  height: 100%;
  /* end of progress bar stuff */
}
</style>