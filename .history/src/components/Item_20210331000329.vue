<template>
  <div
    class="item"
    :style="{
      backgroundImage: 'url(' + getItemImage(item.getName()) + ')',
    }"
  ></div>
  <!-- <div
    class="item"
    v-for="item in inventory.getItems()"
    :key="item.getName()"

    @mouseover="() => console.log(item.tooltip())"
  ></div> -->
  <!-- <h1>{{ item.getName() }}</h1> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["item"],
  setup() {
    function getItemImage(itemName: string) {
      switch (itemName) {
        case "Apple": {
          return "https://wp-dreams.com/goldenminer/css/images/pickaxe.png";
          break;
        }
      }
    }

    return {
      getItemImage,
    };
  },
});
</script>

<style scoped>
.item {
  /* background-color: #7cc4ff; */
  /* background: url(attr(data-url)); */
  border: 2px solid blueviolet;
  width: 30px;
  height: 30px;
}
</style>