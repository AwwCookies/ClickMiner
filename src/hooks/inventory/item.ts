export type Rarity = 'common' | 'rare' | 'epic' | 'legendary'
export type ItemType = 'potion' | 'gem' | "equipment" | "junk"
export class Item {
  private name: string;
  private rarity: Rarity
  private sellPrice: number
  private type: ItemType
  constructor(name: string, rarity: Rarity, sellPrice: number = 0, type: ItemType = "junk") {
    this.name = name
    this.rarity = rarity
    this.sellPrice = sellPrice
    this.type = type
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
}