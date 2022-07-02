import { makeAutoObservable } from 'mobx'

import InputClass from './input'
import QuizItem from './quiz_item'

export default class Store {
  input: InputClass
  quizItem: QuizItem

  constructor() {
    this.input = new InputClass()
    this.quizItem = new QuizItem()

    makeAutoObservable(this)
  }
}
