import TypedEmitter from 'typed-emitter';
import { GameEvents } from "./game"



export class Achievement {
  protected events: TypedEmitter<GameEvents>;
  protected name: string;
  constructor(events: TypedEmitter<GameEvents>, name: string) {
    this.events = events
    this.name = name
  }
  getName(): string {
    return this.name
  }
}
const achievements: any = []

class LevelAchievement extends Achievement {
  constructor(events: TypedEmitter<GameEvents>, _level: number) {
    super(events, `Reached Level ${_level}`)
    events.on("level up", (level) => {
      if (level == _level) {
        events.emit("achievement", this)
      }
    })
  }
}

export function registerAchievements(events: TypedEmitter<GameEvents>) {
  for (let i = 10; i <= 100; i += 10) {
    achievements.push(new LevelAchievement(events, i))
  }
  return achievements
}