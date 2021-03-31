<template>
  <div class="cave-entrance" @click="mineClicked">
    <transition name="slide-fade">
      <img v-if="show" class="goldCoin" src="../assets/images/gold_coin.png" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useGame } from "../hooks/game"

export default defineComponent({
  setup() {
    const { mineClicked } = useGame()
    const show = ref(true)
    setInterval(() => {
      show.value = !show.value
    }, 500)
    return {
      show,
      mineClicked
    }
  },
});
</script>


<style scoped>
.slide-fade-enter-active {
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-100px);
  opacity: 0;
}

.goldCoin {
  /* transform: translateY(100px) */
  margin-top: 30%;
}
</style>