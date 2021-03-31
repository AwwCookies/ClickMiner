import { ref, computed } from "vue"
import { EventEmitter } from 'events';

// Variables
const time = ref(0)
const level = ref(1);
const curExp = ref(50);
const neededExp = ref(1000);
const skillPoints = ref(4);
const gold = ref(0);
const diamonds = ref(0);
const goldPerSecond = ref(1);
const diamondsPerSecond = ref(0.5);
const clickEfficiency = ref(0);
const magicFind = ref(0);
const experiencePerSecond = ref(250);
const unlockedAchievements = ref<[{name: string}]>([])

const events = new EventEmitter()

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
  time.value+= 0.5
  updateGold()
  updateDiamonds()
  updateExperience()
})

events.on("achievement", (achievement: Achievement) => {[
  console.log(`You've earned ${achievement.getName()}`)
]})

function updateGold() {
  gold.value += goldPerSecond.value
}

function updateDiamonds() {
  diamonds.value += diamondsPerSecond.value
}

function updateExperience() {
  function nextLevel() {
    const exponent = 1.5
    const baseXP = 1000
    return Math.floor(baseXP * ((level.value + 1) ^ exponent))
  }
  if (curExp.value + experiencePerSecond.value > neededExp.value) {
    neededExp.value = nextLevel()
    curExp.value = 0
    level.value++
    events.emit("level up", level.value)
    return
  }
  curExp.value += experiencePerSecond.value
}

function mineClicked() {
  gold.value++;
  curExp.value += 1000
}

// Computed
const playTime = computed(() => {
  const hours = `${Math.floor(time.value/3600)}`.padStart(2, '0')
  const mins = `${Math.floor(time.value/60%60)}`.padStart(2, '0')
  const secs = `${Math.floor(time.value % 60)}`.padStart(2, '0')
  return `${hours}:${mins}:${secs}`
})


export function useGame() {
  return {
    time,
    playTime,
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
  };
}