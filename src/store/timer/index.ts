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

  setTimer() {
    this.timer -= 1
  }

  refreshTimer() {
    this.timer = 60
  }

  stopTimer() {
    this.next = false
  }
  startTimer() {
    if (this.timer > 0) {
      setTimeout(() => {
        this.setTimer()
        if (this.next) {
          this.startTimer()
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

  get appTimer() {
    return this.timer
  }
}
