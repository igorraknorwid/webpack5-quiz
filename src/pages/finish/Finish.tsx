import React from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from '../../index'
import Points from '../../components/points/Points'

const Finish = () => {
  const { store } = React.useContext(Context)
  React.useEffect(() => {
    store.timer.stopTimer()
  })

  console.log('results:', store.results.results)

  return (
    <div>
      <Points />
      <h1>Finish</h1>
    </div>
  )
}

export default observer(Finish)
