import React from 'react'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import { BrowserView, MobileView } from 'react-device-detect'

import { Context } from '../../index'
import Input from '../../components/input/Input'

const Start = () => {
  const { store } = React.useContext(Context)

  React.useEffect(() => {
    store.refreshAll()
  })

  const clickHandler = () => {
    store.timer.startTimer()
    store.setName()
    store.setIsStart(true)
  }

  return (
    <main className="d-flex justify-content-center ">
      <BrowserView className="d-flex flex-column m-3">
        <h1 className="mb-2">Welcome to Quze App</h1>
        <p className="mb-2">
          Quiz with {store.quizItem.quizLength} questions in total. One question
          contain 10 points
        </p>
        <div className="mb-2">
          <h2 className="mb-2">Rules</h2>
          <ul>
            <li className="mb-1">1. Correct answer +10 points</li>
            <li className="mb-1">2. Incorrect answer -10 points</li>
            <li className="mb-1">3. 10 seconds to answer to question</li>
            <li className="mb-1">4. You could refresh result alwais</li>
          </ul>
        </div>
        <h2 className="mb-2">Star right here</h2>
        <Input />
        <nav>
          <button className="btn btn-primary" onClick={clickHandler}>
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
