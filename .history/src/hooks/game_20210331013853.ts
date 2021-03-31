import { ref, computed, watch, reactive, toRefs } from "vue"
import { EventEmitter } from 'events';

type Rarity = 'common' | 'rare' | 'epic' | 'legendary'

class Item {
  private name: string;
  private rarity: Rarity
  constructor(name: string, rarity: Rarity) {
    this.name = name
    this.rarity = rarity
  }
  getName(): string {
    return this.name
  }
  getRarity(): Rarity {
    return this.rarity
  }
  tooltip(): string {
    return `<b>${this.name}</b>`
  }
}

class Inventory {
  protected inventory: Item[]
  private max: number
  constructor() {
    this.inventory = []
    this.max = 100
  }
  getItems(): Item[] {
    return this.inventory
  }
  addItem(item: Item): void {
    this.inventory.push(item)
  }
  getMax(): number {
    return this.max
  }
}

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
  inventory: Inventory
}

const state = reactive<IState>({
  time: 0,
  level: 1,
  curExp: 50,
  neededExp: 1000,
  skillPoints: 4,
  gold: 0,
  diamonds: 0,
  goldPerSecond: 1,
  diamondsPerSecond: 0.5,
  clickEfficiency: 0,
  magicFind: 0,
  experiencePerSecond: 250,
  unlockedAchievements: [],
  inventory: new Inventory()
})

const events = new EventEmitter()

for (let i = 0; i < 25; i++) {
  state.inventory.addItem(new Item("Apple", "common"))
  state.inventory.addItem(new Item("Pear", "rare"))
  state.inventory.addItem(new Item("Banana", "epic"))
  state.inventory.addItem(new Item("Coconut", "legendary"))
}

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
})

events.on("achievement", (achievement: Achievement) => {[
  console.log(`You've earned ${achievement.getName()}`)
]})

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
    ...toRefs(state)
  };
}