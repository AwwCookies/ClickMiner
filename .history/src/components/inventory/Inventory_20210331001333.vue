<template>
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
  props: ["inventory"],
  components: {
    Item,
  },
  setup(props) {
    const inventory = props.inventory;
    class Item {
      private name: string;
      private rarity: Rarity;
      constructor(name: string, rarity: Rarity) {
        this.name = name;
        this.rarity = rarity;
      }
      getName(): string {
        return this.name;
      }
      getRarity(): Rarity {
        return this.rarity;
      }
      tooltip(): string {
        return `<b>${this.name}</b>`;
      }
    }
    console.log(inventory.addItem())
  },
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