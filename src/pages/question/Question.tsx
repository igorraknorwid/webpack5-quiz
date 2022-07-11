import React from 'react'
import { observer } from 'mobx-react-lite'
import { useParams, useNavigate } from 'react-router-dom'

import { Context } from '../../index'
import { IAnswer } from '../../models'
import Navigation from '../../components/navigation/Navigation'
import Info from '../../components/info/Info'
import QuizTop from '../../components/quiztop/QuizTop'

const Question = () => {
  const { id } = useParams()
  const { store } = React.useContext(Context)
  const navigate = useNavigate()
  React.useEffect(() => {
    if (id) {
      const findInStorage = store.storage.storage.find(
        (item) => item.id === +id
      )
      if (findInStorage) {
        store.quizItem.setQuizItem(findInStorage)
      } else {
        store.quizItem.getMokeQuizItem(+id)
      }
    } else {
      navigate('/')
    }
  }, [id])

  React.useEffect(() => {
    const findInStorage = store.storage.storage.find(
      (item) => item.id === store.quizItem.item.id
    )
    // const findClicedItem = store.quizItem.item.answers.find((a) => a.clicked)

    if (findInStorage) {
      // console.log('findinstorage', findInStorage)
      store.storage.mapStorage(store.quizItem.item)
    } else {
      store.storage.addItem(store.quizItem.item)
    }

    // console.log('store.quizItem.item', store.quizItem.item)
  }, [store.quizItem.item])

  const clickHandler = (answer: IAnswer) => {
    //attempts logic

    store.results.setAttempts(Number(id), answer.status)

    //points logic
    store.results.setPoints(answer.status)

    //render logic
    store.quizItem.onQuizItemClick(answer.id)
    //timer logic
    if (answer.status) {
      store.timer.addTime(10)
    }
    // navigation
    setTimeout(() => {
      if (store.quizItem.item?.next) {
        navigate(`/quiz/${Number(id) + 1}`)
      } else {
        navigate(`/finish`)
        store.setIsStart(false)
      }
    }, 2000)
  }

  return (
    <>
      <QuizTop />
      <Info />
      {store.quizItem.item?.id ? (
        <div>
          <h2>{store.quizItem.item.question}</h2>
        </div>
      ) : (
        <div>Something are going wrong</div>
      )}

      {store.quizItem.item.answers ? (
        <div>
          {store.quizItem.item.answers.map((item) => {
            return (
              <button
                key={item.id}
                className={
                  item.clicked
                    ? `item active ${item.status ? 'right' : 'fault'}`
                    : `item`
                }
                onClick={() => {
                  clickHandler(item)
                }}
              >
                {item.text}
              </button>
            )
          })}
        </div>
      ) : (
        <h2>Something are going wrong</h2>
      )}
      <Navigation />
    </>
  )
}

export default observer(Question)
