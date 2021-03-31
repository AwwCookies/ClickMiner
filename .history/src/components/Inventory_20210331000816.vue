<template>
  <Item
    v-for="item in inventory.getItems()"
    :key="item.getName()"
    :item="item"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Item from "./Item.vue";
export default defineComponent({
  props: ['inventory'],
  components: {
    Item,
  },
  setup() {},
});
</script>

<style scoped>
.inventory {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  column-gap: 0.2em;
  row-gap: 0.2em;
}
</style>