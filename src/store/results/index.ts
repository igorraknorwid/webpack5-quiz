import { makeAutoObservable } from 'mobx'
import { IResults } from '../../models'

export default class ResultsClass {
  results: IResults[]
  points: number
  constructor() {
    this.points = 0
    this.results = []
    makeAutoObservable(this)
  }
  setPoints(status: boolean) {
    if (status) {
      this.points += 10
    } else {
      this.points -= 10
    }
  }
  setResults(id: number, status: boolean) {
    const find = this.results.find((r) => r.id === id)
    if (find) {
      find.status = status
    } else {
      const newResult = { id, status }
      this.results.push(newResult)
    }
  }
}
