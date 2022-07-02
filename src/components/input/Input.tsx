import React from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from '../../index'

const Input = () => {
  const { store } = React.useContext(Context)

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value
    store.input.setValue(enteredName)
  }
  return (
    <div>
      <input
        value={store.input.value}
        onChange={inputHandler}
        placeholder="Tape you name..."
        className="input"
      />
    </div>
  )
}

export default observer(Input)
