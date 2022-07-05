import { makeAutoObservable } from 'mobx'

export default class TimerClass {
  isVisible: boolean
  timer: number
  next: boolean
  constructor() {
    this.timer = 60
    this.isVisible = false
    this.next = true
    makeAutoObservable(this)
  }

  stopTimer() {
    this.next = false
  }
  setTimer() {
    if (this.timer > 0) {
      const start = setTimeout(() => {
        console.log('next', this.next)
        this.timer -= 1
        if (this.next) {
          this.setTimer()
        }
      }, 1000)
    }
  }
  addTime(time: number) {
    this.timer += time
  }

  setIsVisible(bool: boolean) {
    this.isVisible = bool
  }
}
