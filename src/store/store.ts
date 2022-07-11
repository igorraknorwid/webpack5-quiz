import { makeAutoObservable, autorun } from 'mobx'

import InputClass from './input'
import QuizItem from './quiz_item'
import TimerClass from './timer'
import ResultsClass from './results'
import StorageClass from './storage'

export default class Store {
  input: InputClass
  name: string
  isStart: boolean
  quizItem: QuizItem
  timer: TimerClass
  results: ResultsClass
  storage: StorageClass

  constructor() {
    this.input = new InputClass()
    this.name = ''
    this.isStart = false
    this.quizItem = new QuizItem()
    this.timer = new TimerClass()
    this.results = new ResultsClass()
    this.storage = new StorageClass()

    autorun(() => {
      for (let index = 0; index < this.quizItem.quizLength; index++) {
        this.results.initResults(index + 1)
      }
    })
    makeAutoObservable(this)
  }
  setName() {
    if (this.input.value) {
      this.name = this.input.value
    }
  }

  setIsStart(bool: boolean) {
    this.isStart = bool
  }
}
