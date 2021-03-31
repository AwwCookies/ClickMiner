<template>
  <!-- <div
    class="item"
    v-for="item in inventory.getItems()"
    :key="item.getName()"
    :style="{
      backgroundImage: 'url(' + getItemImage(item.getName()) + ')',
    }"
    @mouseover="() => console.log(item.tooltip())"
  ></div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: [item],
  setup() {
    
  },
})
</script>
