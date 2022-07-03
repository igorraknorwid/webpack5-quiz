import { makeAutoObservable } from 'mobx'

import InputClass from './input'
import QuizItem from './quiz_item'
import TimerClass from './timer'

export default class Store {
  input: InputClass
  quizItem: QuizItem
  timer: TimerClass

  constructor() {
    this.input = new InputClass()
    this.quizItem = new QuizItem()
    this.timer = new TimerClass()

    makeAutoObservable(this)
  }
}
