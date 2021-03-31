export interface Building {
  name: string;
  description: string;
  slots: number;
  currency: "gold" | "diamonds";
  type: number; /* might change later */
  priceModifier?: number;
  xpBonus?: number;
  price?: number;
}

export const buildings: Building[] = [
  {
    name: 'School of the Legends',
    description: 'In return for funds, this shool will produce a random Legendary item for you in 30 minutes. <br><br><span class="warning">(This effect is not permanent: <br>1 fund = 1 item)</span><br><br> 5 funds maximum at once.',
    slots: 5,
    currency: "gold",
    type: 0,
    priceModifier: 1
  },
  {
    name: 'School of the Alchemists',
    description: 'In return for funds, this shool will produce a random Potion for you in 30 minutes. <br><br><span class="warning">(This effect is not permanent: <br>1 fund = 1 item)</span><br><br> 5 funds maximum at once.',
    slots: 5,
    currency: "gold",
    type: 0,
    priceModifier: 1.4
  },
  {
    name: 'School of Knowledge',
    description: 'In return for funds, this shool will produce a random Scroll for you in 30 minutes. <br><br><span class="warning">(This effect is not permanent: <br>1 fund = 1 item)</span><br><br> 5 funds maximum at once.',
    slots: 5,
    currency: "diamonds",
    type: 0,
    priceModifier: 1.9
  },
  {
    name: 'Temple of Golden knowledge',
    description: 'In return for 1 trillion gold sacrifice, this temple will grant you +1xp/second permanently.',
    slots: 5,
    currency: "gold",
    type: 1,
    xpBonus: 1,
    price: 1000000000000
  },
  {
    name: 'Temple of Diamond knowledge',
    description: 'In return for 1 trillion diamonds sacrifice, this temple will grant you +1xp/second permanently.',
    slots: 5,
    currency: "diamonds",
    type: 1,
    xpBonus: 1,
    price: 1000000000000
  }
]