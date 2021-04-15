import { Inventory } from "./inventory"

export type Rarity = 'common' | 'rare' | 'epic' | 'legendary'
export type ItemType = 'potion' | 'gem' | "equipment" | "junk"

export class Item {
  private name: string;
  private rarity: Rarity
  private sellPrice: number
  private type: ItemType
  private description: string
  public inventory: Inventory | null
  // ? convert the options into an object?
  constructor(
    name: string, rarity: Rarity,
    sellPrice: number = 0, type: ItemType = "junk",
    description: string = "No Description"
    ) {
    this.name = name
    this.rarity = rarity
    this.sellPrice = sellPrice
    this.type = type
    this.description = description
    this.inventory = null
  }
  getName(): string {
    return this.name
  }
  getRarity(): Rarity {
    return this.rarity
  }
  getSellPrice(): number {
    return this.sellPrice
  }
  getType(): ItemType {
    return this.type
  }
  getDescription(): string {
    return this.description
  }
}