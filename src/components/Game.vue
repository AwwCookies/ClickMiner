<template>
  <h1>Click Miner</h1>
  <button @click="paused = !paused">{{ paused ? "Start" : "Stop" }}</button>
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
            Remaining Skill Points: {{ formatNumber(skillPoints) }}
          </div>
        </div>
        <div class="gold">
          Gold: {{ formatNumber(gold) }} / {{ formatNumber(goldLimit) }}
        </div>
        <div class="diamonds">
          Diamonds: {{ diamonds }} / {{ diamondLimit }}
        </div>
        <br />
        <div class="stuffPerSecond">
          <p>Gold/s: {{ formatNumber(goldPerSecond) }}</p>
          <p>Diamonds/s: {{ formatNumber(diamondsPerSecond) }}</p>
          <p>Click Efficiency: {{ formatNumber(clickEfficiency) }}</p>
          <p>Magic find/s: {{ formatNumber(magicFind) }}</p>
          <p>Experience/s: {{ formatNumber(experiencePerSecond) }}</p>
        </div>
      </div>
      <CaveEntrance />
    </div>
    <div class="buyables">
      <div class="gamble">some gamble function here</div>
      <div>
        <button @click="currentTab = 'minions'">Minions</button>
        <button @click="currentTab = 'buildings'">Buildings</button>
        <button @click="currentTab = 'upgrades'">Upgrades</button>
        <button>Statistics</button>
        <button @click="currentTab = 'achievements'">Achievements</button>
        <!-- <Minions/> -->
        <component :is="getCurrentTab"></component>
      </div>
    </div>
    <div class="player">
      <Inventory :inventory="finds" name="Latest Find" />
      <Inventory :inventory="inventory" name="Inventory" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { useGame } from "../hooks/game";
import Inventory from "./inventory/Inventory.vue";
import Minions from "./Minions.vue";
import Buildings from "./Buildings.vue";
import CaveEntrance from "./CaveEntrance.vue";
import Achievements from "./Achievements.vue";
import Upgrades from "./Upgrades.vue"
import { formatNumber } from "../hooks/utilities";
export default defineComponent({
  components: {
    Inventory,
    Minions,
    Buildings,
    CaveEntrance,
    Upgrades
  },
  setup() {
    const { level, curExp, neededExp } = useGame();
    const currentTab = ref("minions");

    const getCurrentTab = computed(() => {
      switch (currentTab.value) {
        case "minions": {
          return Minions;
        }
        case "buildings": {
          return Buildings;
        }
        case "achievements": {
          return Achievements;
        }
        case "upgrades": {
          return Upgrades
        }
      }
    });

    const xpbar = computed(() => {
      return `Level: ${level.value} Experience: ${formatNumber(
        curExp.value
      )}/${formatNumber(neededExp.value)}`;
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
      formatNumber,
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
  background-image: url("/src/assets/images/mine.png");
  background-position: center;
  background-size: cover;
  border: 2px solid brown;
  height: 50%;
}

.buyables {
  border: 2px solid red;
  overflow-y: scroll;
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