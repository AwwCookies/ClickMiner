import { IState } from "./game"
import { Item, Rarity } from "./inventory/item"
import { stopFundingBuilding } from "./game"

type SchoolEndings = "Legends" | "Alchemists" | "Knowledge"
type TempleEndings = "Golden Knowledge" | "Diamond Knowledge"

export type School = `School of the ${SchoolEndings}`
export type Temple = `Temple of ${TempleEndings}`
export interface IBuilding {
  name: School | Temple;
  description: string;
  slots: number;
  currency: "gold" | "diamonds";
  type: number; /* might change later */
  priceModifier?: number;
  xpBonus?: number;
  price: number;
}

export abstract class Building {
  name!: School | Temple
  description!: string;
  slots!: number;
  currency!: "gold" | "diamonds";
  type!: number; /* might change later */
  priceModifier?: number;
  xpBonus?: number;
  price!: number;
  constructor(building: IBuilding) {
    Object.assign(this, building)
  }
  effect(state: IState) {
    /* modify state here */
  }
}

class SchoolOfTheLegends extends Building {
  constructor() {
    super({
      name: 'School of the Legends',
      description: 'In return for funds, this shool will produce a random Legendary item for you in 30 minutes. <br><br><span class="warning">(This effect is not permanent: <br>1 fund = 1 item)</span><br><br> 5 funds maximum at once.',
      slots: 5,
      currency: "gold",
      type: 0,
      priceModifier: 1,
      price: 100
    })
  }
  effect(state: IState) {
    setTimeout(() => {
      stopFundingBuilding(this)
      state.inventory.addItem(new Item("Banana", "legendary"))
      console.log("School of the Legends gave you an item!")
    }, 3000)
  }
}

class SchoolOfTheAlchemists extends Building {
  constructor() {
    super({
      name: 'School of the Alchemists',
      description: 'In return for funds, this shool will produce a random Potion for you in 30 minutes. <br><br><span class="warning">(This effect is not permanent: <br>1 fund = 1 item)</span><br><br> 5 funds maximum at once.',
      slots: 5,
      currency: "gold",
      type: 0,
      priceModifier: 1.4,
      price: 2_000_000
    })
  }
  effect(state: IState) {
    setTimeout(() => {
      stopFundingBuilding(this)
      state.inventory.addItem(new Item("Potion", "epic"))
      console.log("School of the Alchemists gave you an item")
    }, 3000)
  }
}

class SchoolOfTheKnowledge extends Building {
  constructor() {
    super({
      name: 'School of the Knowledge',
      description: 'In return for funds, this shool will produce a random Scroll for you in 30 minutes. <br><br><span class="warning">(This effect is not permanent: <br>1 fund = 1 item)</span><br><br> 5 funds maximum at once.',
      slots: 5,
      currency: "diamonds",
      type: 0,
      priceModifier: 1.9,
      price: 3_000_000,
    })
  }
  effect(state: IState) {
    setTimeout(() => {
      stopFundingBuilding(this)
      state.inventory.addItem(new Item("Scroll", "epic"))
      console.log("School of the Knowledge gave you an item")
    }, 3000)
  }
}


class TempleOfGoldenKnowledge extends Building {
  constructor() {
    super({
      name: 'Temple of Golden Knowledge',
      description: 'In return for 1 trillion gold sacrifice, this temple will grant you +1xp/second permanently.',
      slots: 5,
      currency: "gold",
      type: 1,
      xpBonus: 1,
      price: 1000000000000
    })
  }
  effect(state: IState) {
    setTimeout(() => {
      stopFundingBuilding(this)
      state.experiencePerSecond+=1
      console.log("The gods were pleased with your sacrifice.  You gain +1xp/second permanently")
    }, 3000)
  }
}

class TempleOfDiamondKnowledge extends Building {
  constructor() {
    super({
      name: 'Temple of Diamond Knowledge',
      description: 'In return for 1 trillion diamonds sacrifice, this temple will grant you +1xp/second permanently.',
      slots: 5,
      currency: "diamonds",
      type: 1,
      xpBonus: 1,
      price: 1000000000000
    })
  }
  effect(state: IState) {
    setTimeout(() => {
      stopFundingBuilding(this)
      state.experiencePerSecond+=1
      console.log("The gods were pleased with your sacrifice.  You gain +1xp/second permanently")
    }, 3000)
  }
}

export const buildings: Building[] = []

buildings.push(new SchoolOfTheLegends())
buildings.push(new SchoolOfTheAlchemists())
buildings.push(new SchoolOfTheKnowledge())
buildings.push(new TempleOfGoldenKnowledge())
buildings.push(new TempleOfDiamondKnowledge())

export function getBuilding(buildingName: School | Temple): Building {
  return buildings.filter(building => building.name === buildingName)[0]
}

