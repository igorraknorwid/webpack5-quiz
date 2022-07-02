import React from 'react'
import { observer } from 'mobx-react-lite'
import { useParams, Link } from 'react-router-dom'

import { Context } from '../../index'

const Question = () => {
  const { id } = useParams()
  const { store } = React.useContext(Context)
  return (
    <>
      <div>Hello {store.input.value}</div>
      <h1>Question {id}</h1>
    </>
  )
}

export default observer(Question)
