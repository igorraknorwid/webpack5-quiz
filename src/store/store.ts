import { makeAutoObservable, autorun } from 'mobx'

import InputClass from './input'
import QuizItem from './quiz_item'
import TimerClass from './timer'
import ResultsClass from './results'

export default class Store {
  input: InputClass
  quizItem: QuizItem
  timer: TimerClass
  results: ResultsClass

  constructor() {
    this.input = new InputClass()
    this.quizItem = new QuizItem()
    this.timer = new TimerClass()
    this.results = new ResultsClass()
    autorun(() => {
      const length = 5
      for (let index = 0; index < length; index++) {
        this.results.setResults(index + 1, false)
      }
    })

    makeAutoObservable(this)
  }
}
