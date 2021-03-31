<template>
  <h1>The Golden Miner</h1>
  <div class="game">
    <div class="mine">
      <div class="numbers">
        <div class="game-time">Game time: {{ playTime }}</div>
        <div class="exprience xpbar">
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
    <div class="player">
      <div class="inventory">
        <!-- <ul> -->
          <div class="item" v-for="item in inventory.getItems()" :key="item.getName()">
            {{ item.getName() }}
          </div>
        <!-- </ul> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, unref, computed } from "vue";
import { useGame } from "../hooks/game";
export default defineComponent({
  setup() {
    const { level, curExp, neededExp } = useGame();

    const xpbar = computed(() => {
      return `Level: ${level.value} Experience: ${curExp.value}/${neededExp.value}`;
    });

    const xpbarProgress = computed(() => {
      //TODO: Make sure it doesn't exceed 100%
      return `${(curExp.value / neededExp.value) * 100}%`;
    });

    return {
      xpbar,
      xpbarProgress,
      ...useGame(),
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

.inventory {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  column-gap: 0.2em;
}

.item {
  background-color: #7cc4ff;
  border: 1px solid black;
  width: 30px;
  height: 30px;
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
  width: 90%;
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