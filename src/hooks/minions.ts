export interface Minion {
  name: string;
  description: string;
  price: number;
  priceModifier: number;
  attributes: {
    goldPerSec?: number;
    diamondsPerSec?: number
  }
}

export const minions: Minion[] = [
  {
    name: "Mole",
    description: "...",
    price: 10,
    priceModifier: 1.5,
    attributes: {
      "goldPerSec": 1
    }
  },
  {
    name: 'Bulldog',
    description: '...',
    price: 1000,
    priceModifier: 1.5,
    attributes: {
      'goldPerSec': 70,
      'diamondsPerSec': 0.5
    }
  },
  {
    name: 'Giant Ant',
    description: '...',
    price: 100000,
    priceModifier: 1.5,
    attributes: {
      'goldPerSec': 700,
      'diamondsPerSec': 3
    }
  },
  {
    name: 'A.W.E.S.O.M.-O 2000',
    description: '...',
    price: 1000000,
    priceModifier: 1.3,
    attributes: {
      'goldPerSec': 5000,
      'diamondsPerSec': 20
    }
  },
  {
    name: 'Caterpillar',
    description: '...',
    price: 80000000,
    priceModifier: 1.3,
    attributes: {
      'goldPerSec': 30000,
      'diamondsPerSec': 100
    }
  },
  {
    name: 'Pterodactyl',
    description: '...',
    price: 1900000000,
    priceModifier: 1.3,
    attributes: {
      'goldPerSec': 85000,
      'diamondsPerSec': 400
    }
  },
  {
    name: 'Miner Spaceship',
    description: '...',
    price: 29000000000,
    priceModifier: 1.3,
    attributes: {
      'goldPerSec': 500000,
      'diamondsPerSec': 2700
    }
  },
  {
    name: 'The dwarf King',
    description: '...',
    price: 300000000000,
    priceModifier: 1.3,
    attributes: {
      'goldPerSec': 3000000,
      'diamondsPerSec': 16000
    }
  },
  {
    name: 'Spirit Golem',
    description: '...',
    price: 50000000000000,
    priceModifier: 1.3,
    attributes: {
      'goldPerSec': 25000000,
      'diamondsPerSec': 98000
    }
  }
]

export function getMinion(minionName: string): Minion {
  return minions.filter(minion => minion.name === minionName)[0]
}

