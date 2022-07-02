import { makeAutoObservable } from 'mobx'

export default class InputClass {
  value: string
  constructor() {
    this.value = 'fhhhh'
    makeAutoObservable(this)
  }
  setValue(val: string) {
    this.value = val
  }
}
