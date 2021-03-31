import { ref, computed } from "vue"

// Variables
const time = ref(Date.now())
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
const achievements = ref<[{name: string}]>([])

// Keep track of the time the user spends on the page
setInterval(() => {
  time.value++
}, 1000)

// Achievements

// Functions
function mine() {

}

function mineClicked() {
  gold.value++;
}

// Computed
const playTime = computed(() => {
  const hours = Math.floor(time.value/3600)
  const mins = Math.floor(time.value/60%60)
  const secs = Math.floor(time.value % 60)
  return `${hours}:${mins}${secs}`
})


export function useGame() {
  return {
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