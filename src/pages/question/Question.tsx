import React from 'react'
import { observer } from 'mobx-react-lite'
import { useParams, useNavigate, Link } from 'react-router-dom'

import { Context } from '../../index'
import { IAnswer } from '../../models'
import Navigation from '../../components/navigation/Navigation'

const Question = () => {
  const { id } = useParams()
  const { store } = React.useContext(Context)
  const navigate = useNavigate()
  React.useEffect(() => {
    if (id) {
      store.quizItem.getMokeQuizItem(+id)
    } else {
      navigate('/')
    }
  }, [id])
  React.useEffect(() => {
    if (store.timer.timer === 0) {
      navigate('/finish')
    }
  }, [store.timer.timer])

  const clickHandler = (item: IAnswer) => {
    //render logic
    store.quizItem.onQuizItemClick(item.id)
    //timer logic
    if (item.status) {
      store.timer.addTime(10)
    }
    // navigation
    setTimeout(() => {
      if (store.quizItem.item?.next) {
        navigate(`/quiz/${Number(id) + 1}`)
      } else {
        navigate(`/finish`)
      }
    }, 1000)
  }

  return (
    <>
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
