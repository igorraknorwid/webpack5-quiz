import React from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'

const QuestionIndicator = () => {
  const { store } = React.useContext(Context)
  return (
    <div>
      Question {store.quizItem.item.id} of {store.quizItem.quizLength}
    </div>
  )
}

export default observer(QuestionIndicator)
