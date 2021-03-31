<template>
  <h1>
    {{ name }}: ({{ inventory.getItems().length }}/{{ inventory.getMax() }})
  </h1>
  <div class="inventory">
    <Item
      v-for="item in inventory.getItems()"
      :key="item.getName()"
      :item="item"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Item from "./Item.vue";
export default defineComponent({
  props: ["inventory", "name"],
  components: {
    Item,
  },
  setup(props) {
    const inventory = props.inventory;
  },
});
</script>

<style scoped>
.inventory {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32px, 1fr));
  /* grid-template-rows: repeat(3, 1fr); */
  column-gap: 0.2em;
  row-gap: 0.2em;
  max-height: 10em;
  overflow-y: scroll;
}
</style>