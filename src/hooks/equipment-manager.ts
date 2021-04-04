import { Equipment } from "./equipment"
class EquipmentManager {
  private slots: {[key: string]: Equipment | null}
  constructor() {
    this.slots = {
      head: null,
      ring: null,
      tool: null,
      amulet: null
    }
  }
  equip(slot: "head" | "ring" | "tool" | "amulet") {
    
  }
}