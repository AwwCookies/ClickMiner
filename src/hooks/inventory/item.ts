export type Rarity = 'common' | 'rare' | 'epic' | 'legendary'

export class Item {
  private name: string;
  private rarity: Rarity
  constructor(name: string, rarity: Rarity) {
    this.name = name
    this.rarity = rarity
  }
  getName(): string {
    return this.name
  }
  getRarity(): Rarity {
    return this.rarity
  }
}