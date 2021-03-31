import { Item, Rarity } from "./item"

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
  addItem(item: Item): void {
    this.inventory.push(item)
  }
  getMax(): number {
    return this.max
  }
}