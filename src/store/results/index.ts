import { makeAutoObservable } from 'mobx'
import { IResults } from '../../models'

interface IAttempt {
  id: number
  isCorrect: boolean
}

export default class ResultsClass {
  results: IResults[]
  points: number
  attempts: IAttempt[]

  constructor() {
    this.points = 0
    this.results = []
    this.attempts = []

    makeAutoObservable(this)
  }

  setPoints(status: boolean) {
    if (status) {
      this.points += 10
      this.increase()
    } else {
      this.points -= 10
      this.decrease()
    }

    for (let index = 0; index < this.results.length; index++) {
      const element = this.results[index]
    }
  }

  increase() {
    const value = this.points && this.points / 10
    if (value) {
      this.results.map((r) => {
        if (r.id < value) {
          r.status = 'correct'
        }
        if (r.id === value) {
          r.status = 'plus'
        }
        return r
      })
    }
  }

  decrease() {
    const value = this.points && this.points / 10
    this.results.map((r) => {
      if (r.id < value + 1) {
        r.status = 'correct'
      }
      if (r.id === value + 1) {
        r.status = 'fault'
      }
    })
  }

  initResults(id: number) {
    const find = this.results.find((r) => r.id === id)
    if (!find) {
      const newResult: IResults = { id, status: 'init' }
      this.results.push(newResult)
    }
  }

  refreshResults() {
    this.results.map((r) => {
      r.status = 'init'
    })
  }

  refreshPoints() {
    this.points = 0
  }

  setAttempts(id: number, status: boolean) {
    console.log(id, status, this.attempts)
    const find = this.attempts.find((a) => a.id === id)
    if (find) {
      find.isCorrect = status
    } else {
      this.attempts.push({ id, isCorrect: status })
    }
  }
}
