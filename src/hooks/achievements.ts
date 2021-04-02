import TypedEmitter from 'typed-emitter';
import { GameEvents, IState } from "./game"



export class Achievement {
  protected events: TypedEmitter<GameEvents>;
  protected state: IState;
  protected name: string;
  public completed: boolean
  constructor(state: IState, events: TypedEmitter<GameEvents>, name: string) {
    this.events = events
    this.state = state
    this.name = name
    this.completed = false
  }
  getName(): string {
    return this.name
  }
  isCompleted(): boolean {
    return this.completed
  }
}
const achievements: Achievement[] = []

class LevelAchievement extends Achievement {
  constructor(state: IState, events: TypedEmitter<GameEvents>, _level: number) {
    super(state, events, `Reached Level ${_level}`)
    events.on("level up", (level) => {
      if (level == _level) {
        this.completed = true
        this.state.earnedAchievements.push(this.getName())
        events.emit("achievement", this)
      }
    })
  }
}

class FirstAchievement extends Achievement {
  constructor(state: IState, events: TypedEmitter<GameEvents>) {
    super(state, events, "Your first Achievement! Here's another!")
    events.once("achievement", () => {
      this.completed = true
      this.state.earnedAchievements.push(this.getName())
      events.emit("achievement", this)
    })
  }
}

export function registerAchievements(state: IState, events: TypedEmitter<GameEvents>) {
  for (let i = 10; i <= 100; i += 10) {
    achievements.push(new LevelAchievement(state, events, i))
  }
  achievements.push(new FirstAchievement(state, events))
  return achievements
}