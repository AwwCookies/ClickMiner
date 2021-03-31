import { ref, computed } from "vue"

// Variables
const startTime = ref(Date.now())
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
const achievements = ref<[{name: string}]>([])

// Achievements

// Functions
function mine() {

}

function mineClicked() {
  gold.value++;
}

// Computed
const timePlayed = computed((): number => {
  return Date.now() - startTime.value
})


export function useGame() {
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
    timePlayed
  };
}