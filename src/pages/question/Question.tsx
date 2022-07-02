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
  })
  return (
    <>
      {store.quizItem.item?.id ? (
        <div>
          <h2>{store.quizItem.item.question}</h2>
        </div>
      ) : (
        <div>Something are going wrong</div>
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
