import React from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from '../../index'
import Hello from '../hello/Hello'

interface IHello {
  name: string
}

const QuizTop = () => {
  const { store } = React.useContext(Context)
  return (
    <div>
      <h2>Typescript Qize</h2>
      <Hello name={store.name} />
    </div>
  )
}

export default observer(QuizTop)
