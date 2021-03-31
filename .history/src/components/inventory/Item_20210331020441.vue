<template>
  <div
    class="item"
    :ref="setItemRef"
    :data-tippy-content="genTooltip(item)"
    :data-rarity="item.getRarity()"
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
          interactive: true,
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

    function genTooltip(item): string {
      return `
        <h1>${item.getName()}</h1>
        <h2>${"[item type]"}</h2>
        <h3>${"Selling Price: 2g"}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In tincidunt mauris in augue egestas, sit amet accumsan libero
          varius. In in dui auctor, suscipit nulla a, vehicula ante.
          Cras a metus interdum enim sagittis cursus eget in nulla. 
          Praesent condimentum tortor et neque posuere, at tempor erat 
          commodo. Vivamus non nulla lobortis, tristique lorem at, lobortis 
          nunc. Pellentesque habitant morbi tristique senectus et netus et 
          malesuada fames ac turpis egestas. Fusce ornare leo tellus, 
          vitae dignissim magna consequat nec. 
          Pellentesque ultrices eget metus et vulputate. 
        </p>
      `;
    }

    return {
      getItemImage,
      setItemRef,
      genTooltip,
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
[data-rarity="common"] {
  border-color: gray;
}
[data-rarity="rare"] {
  border-color: blue;
}
[data-rarity="epic"] {
  border-color: goldenrod;
}
[data-rarity="legendary"] {
  border-color: orangered;
}
</style>