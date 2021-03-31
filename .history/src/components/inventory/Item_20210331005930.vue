<template>
  <div
    class="item"
    :ref="setItemRef"
    :data-tippy-content="item.tooltip()"
    :style="{
      backgroundImage: 'url(' + getItemImage(item.getName()) + ')',
    }"
  ></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUpdate, onUpdated } from "vue";
// import { useTippy } from "vue-tippy/composition";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

export default defineComponent({
  props: ["item"],
  setup() {
    let itemRefs = [];
    const setItemRef = (el) => {
      if (el) {
        itemRefs.push(el);
      }
    };
    onBeforeUpdate(() => {
      itemRefs = [];
    });

    onMounted(() => {
      itemRefs.forEach((item) => {
        tippy(item, {
          allowHTML: true,
          interactive: true
        });
      });
    });

    // useTippy();

    function getItemImage(itemName: string) {
      switch (itemName) {
        case "Apple": {
          return "https://wp-dreams.com/goldenminer/css/images/pickaxe.png";
        }
      }
    }

    return {
      getItemImage,
      setItemRef,
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