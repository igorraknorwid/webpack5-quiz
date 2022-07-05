import React from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from '../../index'

const Header = () => {
  const { store } = React.useContext(Context)
  return (
    <header className="header">
      <div>
        <h2>Quiz App</h2>

        <div>Timer : {store.timer.timer}</div>
      </div>
    </header>
  )
}

export default observer(Header)
