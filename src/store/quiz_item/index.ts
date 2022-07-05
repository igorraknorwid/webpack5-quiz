import { makeAutoObservable } from 'mobx'
import { IQuizItem } from '../../models'

const moke_quiz: IQuizItem[] = [
  {
    id: 1,
    next: true,
    question: 'Question 1',
    answers: [
      {
        id: 1,
        clicked: false,
        status: true,
        text: 'Answer 1',
      },
      {
        id: 2,
        clicked: false,
        status: false,
        text: 'Answer 2',
      },
      {
        id: 3,
        clicked: false,
        status: false,
        text: 'Answer 3',
      },
      {
        id: 4,
        clicked: false,
        status: false,
        text: 'Answer 4',
      },
    ],
  },
  {
    id: 2,
    next: true,
    question: 'Question 2',
    answers: [
      {
        id: 1,
        clicked: false,
        status: false,
        text: 'Answer 1',
      },
      {
        id: 2,
        clicked: false,
        status: false,
        text: 'Answer 2',
      },
      {
        id: 3,
        clicked: false,
        status: false,
        text: 'Answer 3',
      },
      {
        id: 4,
        clicked: false,
        status: true,
        text: 'Answer 4',
      },
    ],
  },
  {
    id: 3,
    next: true,
    question: 'Question 3',
    answers: [
      {
        id: 1,
        clicked: false,
        status: false,
        text: 'Answer 1',
      },
      {
        id: 2,
        clicked: false,
        status: false,
        text: 'Answer 2',
      },
      {
        id: 3,
        clicked: false,
        status: true,
        text: 'Answer 3',
      },
      {
        id: 4,
        clicked: false,
        status: false,
        text: 'Answer 4',
      },
    ],
  },
  {
    id: 4,
    next: true,
    question: 'Question 4',
    answers: [
      {
        id: 1,
        clicked: false,
        status: false,
        text: 'Answer 1',
      },
      {
        id: 2,
        clicked: false,
        status: false,
        text: 'Answer 2',
      },
      {
        id: 3,
        clicked: false,
        status: false,
        text: 'Answer 3',
      },
      {
        id: 4,
        clicked: false,
        status: true,
        text: 'Answer 4',
      },
    ],
  },
  {
    id: 5,
    next: false,
    question: 'Question 5',
    answers: [
      {
        id: 1,
        clicked: false,
        status: false,
        text: 'Answer 1',
      },
      {
        id: 2,
        clicked: false,
        status: false,
        text: 'Answer 2',
      },
      {
        id: 3,
        clicked: false,
        status: false,
        text: 'Answer 3',
      },
      {
        id: 4,
        clicked: false,
        status: true,
        text: 'Answer 4',
      },
    ],
  },
]

export default class QuizItem {
  item: IQuizItem
  constructor() {
    this.item = {} as IQuizItem
    makeAutoObservable(this)
  }

  getMokeQuizItem(id: number) {
    const find = moke_quiz.find((item) => item.id === id)
    if (find) {
      this.item = find
    }
  }

  onQuizItemClick(id: number) {
    this.item = {
      ...this.item,
      answers: [...this.item.answers].map((answer) => {
        if (answer.id === id) {
          return { ...answer, clicked: true }
        }
        return { ...answer, clicked: false }
      }),
    }
  }
}
