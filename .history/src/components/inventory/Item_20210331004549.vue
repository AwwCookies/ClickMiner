<template>
  <div
    class="item"
    :ref="setItemRef"
    data-tippy-content="hey"
    :style="{
      backgroundImage: 'url(' + getItemImage(item.getName()) + ')',
    }"
  ></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUpdate, onUpdated } from "vue";
import { useTippy } from "vue-tippy";
// import tippy from 'tippy.js';
// import 'tippy.js/dist/tippy.css';

export default defineComponent({
  props: ["item"],
  setup() {
    // let itemRefs = [];
    // const setItemRef = (el) => {
    //   if (el) {
    //     itemRefs.push(el);
    //   }
    // };
    // onBeforeUpdate(() => {
    //   itemRefs = [];
    // });
    // onUpdated(() => {
    //   console.log(itemRefs);
    // });

    // useTippy();

    // function getItemImage(itemName: string) {
    //   switch (itemName) {
    //     case "Apple": {
    //       return "https://wp-dreams.com/goldenminer/css/images/pickaxe.png";
    //     }
    //   }
    // }
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