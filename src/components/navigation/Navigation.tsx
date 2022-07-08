import React from 'react'
import { observer } from 'mobx-react-lite'
import { useParams, useNavigate, Link } from 'react-router-dom'

import { Context } from '../../index'

const Navigation = () => {
  const { id } = useParams()
  const { store } = React.useContext(Context)
  const navigate = useNavigate()
  const onNextClickHandler = () => {
    const next: boolean = store.quizItem.item?.next
    if (next) {
      navigate(`/quiz/${Number(id) + 1}`)
    } else {
      navigate(`/finish`)
      store.setIsStart(false)
    }
  }
  const onRefreshClickHandler = () => {
    store.results.refreshResults()
    store.storage.refreshStorage()
    store.timer.refreshTimer()
    navigate(`/quiz/1`)
  }

  const onBackClickHandler = () => {
    if (Number(id) > 1) {
      navigate(`/quiz/${Number(id) - 1}`)
    }
  }
  return (
    <div className="navigation">
      <button
        disabled={Number(id) < 2 ? true : false}
        onClick={onBackClickHandler}
      >
        Back
      </button>
      <button onClick={onRefreshClickHandler}>Refresh</button>
      <button onClick={onNextClickHandler}>
        {store.quizItem.item?.next ? 'Next' : 'Finish'}
      </button>
      <div></div>
    </div>
  )
}

export default observer(Navigation)
