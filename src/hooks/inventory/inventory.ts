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

  getItemsFiltered({ name, rarity, type }: IInventoryFilterOptions): Item[] {
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

  removeItem(item: any): void {
    const index = this.inventory.indexOf(item);
    if (index > -1) {
      this.inventory.splice(index, 1);
    }
  }

  getMax(): number {
    return this.max
  }

  sort(by: "name" | "type" | "rarity") {
    switch (by) {
      case "name": {
        this.inventory.sort((a, b) => {
          const nameA = a.getName().toLowerCase()
          const nameB = b.getName().toLowerCase()
          if (nameA < nameB) {
            return - 1
          } else {
            return 1
          }
          return 0
        })
      }
      case "rarity": {
        this.inventory.sort((a, b) => {
          const nameA = a.getRarity().toLowerCase()
          const nameB = b.getRarity().toLowerCase()
          if (nameA < nameB) {
            return - 1
          } else {
            return 1
          }
          return 0
        })
      }
      case "type": {
        this.inventory.sort((a, b) => {
          const nameA = a.getType().toLowerCase()
          const nameB = b.getType().toLowerCase()
          if (nameA < nameB) {
            return - 1
          } else {
            return 1
          }
          return 0
        })
      }
    }
  } /* end of sort function */

}