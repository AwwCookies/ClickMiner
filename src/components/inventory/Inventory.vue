<template>
  <h1>
    {{ name }}: ({{ inventory.getItems().length }}/{{ inventory.getMax() }})
  </h1>
  <label>Search: </label>
  <input type="text" v-model="nameFilter" />
  <div class="inventory">
    <Item
      v-for="item in filteredInventory"
      :key="item.getName()"
      :item="item"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import Item from "./Item.vue";
import { Inventory } from "../../hooks/inventory/inventory"
import { Rarity } from "../../hooks/inventory/item"

export default defineComponent({
  props: ["inventory", "name"],
  components: {
    Item,
  },
  setup(props) {
    const nameFilter = ref("")
    const rarityFilter = ref<Rarity | "">("")
    const inventory: Inventory = props.inventory;

    const filteredInventory = computed(() => {
      return inventory.getItemsFiltered({
        name: nameFilter.value,
        rarity: rarityFilter.value
      })
    })

    return { nameFilter, filteredInventory }
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
  min-height: 10em;
  max-height: 10em;
  overflow-y: scroll;
}
</style>