import { Item } from "./inventory/item"
import { Rarity } from "./global-types"

export interface IEquipmentOptions {
  name: string;
  rarity: Rarity;
}

export class Equipment extends Item {
  constructor({name, rarity}: IEquipmentOptions) {
    super(name, rarity)
  }
}