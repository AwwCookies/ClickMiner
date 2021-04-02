import { Item, Rarity, ItemType } from "./item"

export interface IInventoryFilterOptions {
  name?: string;
  rarity?: Rarity | "";
  type?: ItemType | ""
}

export class Inventory {
  protected inventory: Item[]
  private max: number
  constructor() {
    this.inventory = []
    this.max = 250
  }
  
  getItems(): Item[] {
    return this.inventory
  }

  getItemsFiltered({name, rarity, type}: IInventoryFilterOptions): Item[] {
    let items = this.inventory
    if (name && name.length > 0) {
      items = items.filter((item: Item) => {
        return item.getName().toLowerCase().includes(name.toLowerCase())
      })
    }
    if (rarity && rarity.length > 0) {
      items = items.filter((item: Item) => {
        return item.getRarity().toLowerCase().includes(rarity.toLowerCase())
      })
    }
    if (type && type.length > 0) {
      items = items.filter((item: Item) => {
        return item.getType().toLowerCase().includes(type.toLowerCase())
      })
    }
    return items
  }
  
  addItem(item: Item): void {
    this.inventory.push(item)
  }
  
  getMax(): number {
    return this.max
  }
}