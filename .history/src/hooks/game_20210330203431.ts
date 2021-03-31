import { ref, computed } from "vue"
import { EventEmitter } from 'events';

// Variables
const time = ref(0)
const level = ref(1);
const curExp = ref(50);
const neededExp = ref(200);
const skillPoints = ref(4);
const gold = ref(0);
const diamonds = ref(0);
const goldPerSecond = ref(1);
const diamondsPerSecond = ref(0.5);
const clickEfficiency = ref(0);
const magicFind = ref(0);
const experiencePerSecond = ref(25);
const achievements = ref<[{name: string}]>([])

const events = new EventEmitter()

// Game Tick
setInterval(() => {
  events.emit('tick')
}, 1000)

events.on('tick', () => {
  time.value++
  gold.value += goldPerSecond.value
  diamonds.value += diamondsPerSecond.value
  updateExperience()
  levelAndXp()
})

function updateExperience() {
  if (curExp.value + experiencePerSecond.value > neededExp.value) {
    neededExp.value = nextLevel()
    curExp.value = 0
    level.value++
    return
  }
  curExp.value += experiencePerSecond.value
}

function nextLevel() {
  const exponent = 1.5
  const baseXP = 1000
  return Math.floor(baseXP * ((level.value + 1) ^ exponent))
}

function levelAndXp() {
  if (curExp.value >= neededExp.value) {

  }
}

// Achievements

// Functions
function mine() {

}

function mineClicked() {
  gold.value++;
  experience.value += 1000
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