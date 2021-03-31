import { ref, computed, watch, reactive, toRefs } from "vue"
import { EventEmitter } from 'events';
import { Chance } from "chance";

import { minions, getMinion } from "./minions"

import { Item, Rarity } from "./inventory/item"
import { Inventory } from "./inventory/inventory"

// Variables
interface IState {
  time: number;
  level: number;
  curExp: number;
  neededExp: number;
  skillPoints: number;
  gold: number;
  diamonds: number;
  goldPerSecond: number;
  diamondsPerSecond: number;
  clickEfficiency: number;
  magicFind: number;
  experiencePerSecond: number;
  unlockedAchievements: Array<Achievement>;
  inventory: Inventory;
  minionsOwned: {[key: string]: number}
}

const state = reactive<IState>({
  time: 0,
  level: 1,
  curExp: 50,
  neededExp: 1000,
  skillPoints: 4,
  gold: 100000,
  diamonds: 0,
  goldPerSecond: 1,
  diamondsPerSecond: 0.5,
  clickEfficiency: 0,
  magicFind: 0,
  experiencePerSecond: 250,
  unlockedAchievements: [],
  inventory: new Inventory(),
  minionsOwned: {}
})

// Populate state.minions
for (const minion of minions) {
  state.minionsOwned[minion.name] = 0
}


/* minion utility functions */
function buyMinion(minionName: string) {
  const minion = getMinion(minionName)
  if (!minion) { return }
  if (canBuyMinion(minionName)) {
    state.gold -= getMinionCost(minionName)
    state.minionsOwned[minionName]++
    state.goldPerSecond += minion.attributes.goldPerSec || 0
    state.diamondsPerSecond += minion.attributes.diamondsPerSec || 0
  }
}

function getMinionCost(minionName: string): number {
  const minion = getMinion(minionName)
  return minion.price * (minion.priceModifier * (state.minionsOwned[minion.name] + 1))
}

function canBuyMinion(minionName: string): boolean {
  const minion = getMinion(minionName)
  return state.gold - getMinionCost(minionName) >= 0
}
/* end minion utility functions */

const events = new EventEmitter()
const chance = new Chance()



abstract class Achievement {
  protected events: EventEmitter;
  protected name: string;
  constructor(events: EventEmitter, name: string) {
    this.events = events
    this.name = name
  }
  getName(): string {
    return this.name
  }
}

class LevelTenAchievement extends Achievement {
  constructor(events: EventEmitter) {
    super(events, "Reached Level 10")
    events.on("level up", (level) => {
      if (level == 10) {
        events.emit("achievement", this)
      }
    })
  }
}

new LevelTenAchievement(events)

// Game Tick
setInterval(() => {
  events.emit('tick')
}, 500)

events.on('tick', () => {
  state.time+= 0.5
  updateGold()
  updateDiamonds()
  updateExperience()
  generateLoot()
})

events.on("achievement", (achievement: Achievement) => {[
  console.log(`You've earned ${achievement.getName()}`)
]})

function generateLoot() {
  /* 10% chance to generate loot */
  if (!chance.bool({likelihood: 10})) {return}
  const num = chance.integer({min: 0, max: 3})
  switch (num) {
    case 0: {
      state.inventory.addItem(new Item("Apple", "common"))
      break;
    }
    case 1: {
      state.inventory.addItem(new Item("Apple", "rare"))
      break;
    }
    case 2: {
      state.inventory.addItem(new Item("Apple", "epic"))
      break;
    }
    case 3: {
      state.inventory.addItem(new Item("Apple", "legendary"))
      break;
    }
  }
}

function updateGold() {
  state.gold += state.goldPerSecond
}

function updateDiamonds() {
  state.diamonds += state.diamondsPerSecond
}

function updateExperience() {
  function nextLevel() {
    const exponent = 1.5
    const baseXP = 1000
    return Math.floor(baseXP * ((state.level + 1) ^ exponent))
  }
  if (state.curExp + state.experiencePerSecond > state.neededExp) {
    state.neededExp = nextLevel()
    state.curExp = 0
    state.level++
    events.emit("level up", state.level)
    return
  }
  state.curExp += state.experiencePerSecond
}

function mineClicked() {
  state.gold++
  state.curExp += 1000
}

// Computed
const playTime = computed(() => {
  const hours = `${Math.floor(state.time/3600)}`.padStart(2, '0')
  const mins = `${Math.floor(state.time/60%60)}`.padStart(2, '0')
  const secs = `${Math.floor(state.time % 60)}`.padStart(2, '0')
  return `${hours}:${mins}:${secs}`
})


export function useGame() {
  return {
    mineClicked,
    playTime,
    events,
    buyMinion,
    getMinionCost,
    canBuyMinion,
    minions,
    ...toRefs(state)
  };
}