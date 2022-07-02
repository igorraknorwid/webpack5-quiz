import React from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from '../../index'

const Header = () => {
  const { store } = React.useContext(Context)
  return (
    <header className="header">
      <div>
        <h2>Quiz App</h2>
        {store.input.value && <div>Hello {store.input.value}!</div>}
      </div>
    </header>
  )
}

export default observer(Header)
