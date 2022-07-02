import { makeAutoObservable } from 'mobx'

import InputClass from './input'

export default class Store {
  input: InputClass

  constructor() {
    this.input = new InputClass()

    makeAutoObservable(this)
  }
}
