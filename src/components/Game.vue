<template>
  <h1>Click Miner</h1>
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
    <div class="buyables">
      <div class="gamble">some gamble function here</div>
      <div>
        <button @click="currentTab = 'minions'">Minions</button>
        <button>Buildings</button>
        <button>Statistics</button>
        <button>Achievements</button>
        <!-- <Minions/> -->
        <component :is="getCurrentTab"></component>
      </div>
    </div>
    <div class="player">
      <Inventory :inventory="inventory" name="Latest Finds"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useGame } from "../hooks/game";
import Inventory from "./inventory/Inventory.vue"
import Minions from "./Minions.vue"
export default defineComponent({
  components: {
    Inventory,
    Minions
  },
  setup() {
    const { level, curExp, neededExp } = useGame();
    const currentTab = ref("")

    const getCurrentTab = computed(() => {
      switch (currentTab.value) {
        case "minions": {
          return Minions
          break
        }
      }
    })

    const xpbar = computed(() => {
      return `Level: ${level.value} Experience: ${curExp.value}/${neededExp.value}`;
    });

    const xpbarProgress = computed(() => {
      //TODO: Make sure it doesn't exceed 100%
      return `${(curExp.value / neededExp.value) * 100}%`;
    });

    return {
      currentTab,
      getCurrentTab,
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
  border: 2px solid white;
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
  color: black;
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