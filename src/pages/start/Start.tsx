import React from 'react'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import { BrowserView, MobileView } from 'react-device-detect'

import { Context } from '../../index'
import Input from '../../components/input/Input'

const Start = () => {
  const { store } = React.useContext(Context)

  const clickHandler = () => {
    store.timer.startTimer()
    store.setName()
    store.setIsStart(true)
  }

  return (
    <main className="main">
      <BrowserView>
        <Input />
        <nav>
          <button onClick={clickHandler}>
            <Link to="quiz/1">Start</Link>
          </button>
        </nav>
      </BrowserView>
      <MobileView>
        <h1>This is rendered only on mobile</h1>
      </MobileView>
    </main>
  )
}

export default observer(Start)
