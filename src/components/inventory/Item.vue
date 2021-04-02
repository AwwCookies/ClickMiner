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
    let itemRefs: any = [];
    const setItemRef = (el: any) => {
      if (el) {
        itemRefs.push(el);
      }
    };
    onBeforeUpdate(() => {
      itemRefs = [];
    });

    onMounted(() => {
      itemRefs.forEach((item: any) => {
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


    function genTooltip(item: any): string {
      return `
        <h1 data-rarity="${item.getRarity()}">${item.getName()}</h1>
        <h2>${"[item type]"}</h2>
        <h3>${"Selling Price: 2g"}</h3>
        <p>た課派れおよそんレレハウゅろ課遊目素都根舳派おスノヨハ、
        舳雲以擢目鵜つ離夜阿手かいこす無やつめイキフハいっぬぬよょ
        保個毛こぬれ手素う等鵜れへ以のさ。個目そす譜
        うやれむえそろまけ雲魔阿遊いゆま。
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
  border-color: purple;
}
[data-rarity="legendary"] {
  border-color: orangered;
}
</style>