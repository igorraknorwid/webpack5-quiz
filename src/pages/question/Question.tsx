import React from 'react'
import { observer } from 'mobx-react-lite'
import { useParams, useNavigate, Link } from 'react-router-dom'

import { Context } from '../../index'

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
                  store.quizItem.onQuizItemClick(item.id)
                  if (item.status) {
                    store.timer.addTime(10)
                  }

                  setTimeout(() => {
                    if (store.quizItem.item?.next) {
                      navigate(`/quiz/${Number(id) + 1}`)
                    } else {
                      navigate(`/finish`)
                    }
                  }, 1000)
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

      {store.quizItem.item?.next ? (
        <nav>
          <Link to={`/quiz/${Number(id) + 1}`}>Next</Link>
        </nav>
      ) : (
        <nav>
          <Link to={`/finish`}>Finish</Link>
        </nav>
      )}
    </>
  )
}

export default observer(Question)
