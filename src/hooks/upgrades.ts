import { IState } from "./game"

export interface IUpgrade {
  name: string;
  price: number;
  currency: "gold" | "diamonds";
  effect: (state: IState) => void;
}

export const upgrades: {[key: string]: IUpgrade} = {
  "Increase Gold Capacity by 100,000": {
    name: "Increase Gold Capacity by 100,000",
    price: 1,
    currency: "gold",
    effect: (state: IState) => {
      state.goldLimit += 100_000
    }
  }
}

export function applyUpgrade(upgradeName: string, state: IState) {
  if (upgradeName !in upgrades) { throw new Error(`${upgradeName} is an invalid upgrade name`) }
  upgrades[upgradeName].effect(state)
}