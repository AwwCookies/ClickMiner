<template>
  <div
    class="item"
    data-tippy-content="hey"
    :style="{
      backgroundImage: 'url(' + getItemImage(item.getName()) + ')',
    }"
  ></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useTippy } from "vue-tippy/composition";
// import tippy from 'tippy.js';
// import 'tippy.js/dist/tippy.css';

export default defineComponent({
  props: ["item"],
  setup() {
    onMounted(() => {

    })

    function getItemImage(itemName: string) {
      switch (itemName) {
        case "Apple": {
          return "https://wp-dreams.com/goldenminer/css/images/pickaxe.png";
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