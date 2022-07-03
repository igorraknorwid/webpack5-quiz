import { makeAutoObservable } from 'mobx'

export default class TimerClass {
  timer: number
  constructor() {
    this.timer = 60
    makeAutoObservable(this)
  }
  setTimer() {
    if (this.timer > 0) {
      setTimeout(() => {
        this.timer -= 1
        this.setTimer()
      }, 1000)
    }
  }
  addTime(time: number) {
    this.timer += time
  }
}
