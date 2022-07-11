import { makeAutoObservable } from 'mobx'
import { IQuizItem } from '../../models'

export default class StorageClass {
  storage: IQuizItem[]
  constructor() {
    this.storage = []
    makeAutoObservable(this)
  }
  addItem(item: IQuizItem) {
    // console.log('ADD TO STORAGE')
    this.storage.push(item)
  }

  mapStorage(value: IQuizItem) {
    // console.log('mapStorage', value)
    this.storage = this.storage.map((item) => {
      if (item.id === value.id) {
        return value
      }
      return item
    })
  }

  refreshStorage() {
    this.storage.map((item) => {
      return { ...item, answers: item.answers.map((a) => (a.clicked = false)) }
    })
  }
}
