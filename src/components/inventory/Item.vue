<template>
  <div
    @dblclick="transferToInventory(item)"
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
import { useGame } from "../../hooks/game"

import unidImgUrl from "../../assets/images/unid.png"

export default defineComponent({
  props: ["item"],
  setup() {
    const { inventory, finds } = useGame()
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
          delay: 100
        });
      });
    });

    // useTippy();

    function getItemImage(itemName: string) {
      switch (itemName) {
        default: {
          return unidImgUrl
        }
      }
    }


    function genTooltip(item: any): string {
      return `
        <h1 data-rarity="${item.getRarity()}">${item.getName()}</h1>
        <h2>${item.getType()}</h2>
        <h3>${"Selling Price: 2g"}</h3>
        <p>た課派れおよそんレレハウゅろ課遊目素都根舳派おスノヨハ、
        舳雲以擢目鵜つ離夜阿手かいこす無やつめイキフハいっぬぬよょ
        保個毛こぬれ手素う等鵜れへ以のさ。個目そす譜
        うやれむえそろまけ雲魔阿遊いゆま。
        </p>
      `;
    }

    function transferToInventory(item: any) {
      finds.value.removeItem(item)
      inventory.value.addItem(item)
    }

    return {
      getItemImage,
      setItemRef,
      genTooltip,
      transferToInventory,
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