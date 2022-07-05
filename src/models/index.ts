export interface IAnswer {
  id: number
  clicked: boolean
  status: boolean
  text: string
}

export interface IResults {
  id: number
  status: boolean
}

export interface IQuizItem {
  id: number
  question: string
  answers: IAnswer[]
  next: boolean
}
