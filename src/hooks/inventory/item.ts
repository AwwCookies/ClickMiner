export type Rarity = 'common' | 'rare' | 'epic' | 'legendary'

export class Item {
  private name: string;
  private rarity: Rarity
  private sellPrice: number
  constructor(name: string, rarity: Rarity, sellPrice: number = 0) {
    this.name = name
    this.rarity = rarity
    this.sellPrice = sellPrice
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
}