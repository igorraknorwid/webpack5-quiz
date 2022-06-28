import { makeAutoObservable } from 'mobx'

export default class Store {
  test: string
  constructor() {
    this.test = 'Hello World'
    makeAutoObservable(this)
  }
}
