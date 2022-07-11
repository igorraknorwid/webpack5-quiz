import React from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from '../../index'
import Points from '../../components/points/Points'

const Finish = () => {
  const { store } = React.useContext(Context)
  React.useEffect(() => {
    store.timer.stopTimer()
  })

  const totalAtemted = store.results.attempts.length
  const correctAtemted = store.results.attempts.filter((a) => a.isCorrect)
    .length
  const faultAtemted = store.results.attempts.filter((a) => !a.isCorrect).length

  for (let index = 0; index < store.results.attempts.length; index++) {
    const element = store.results.attempts[index]
    console.log('id:', element.id, '', 'status:', element.isCorrect)
  }

  return (
    <div>
      <div>Congranulation {store.name}</div>
      <div>Total question attempted : {totalAtemted}</div>
      <div>Total correct Answerd : {correctAtemted}</div>
      <div>Total fault Answerd : {faultAtemted}</div>
      <Points />
    </div>
  )
}

export default observer(Finish)
