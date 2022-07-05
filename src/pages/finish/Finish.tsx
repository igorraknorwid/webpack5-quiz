import React from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from '../../index'

const Finish = () => {
  const { store } = React.useContext(Context)
  React.useEffect(() => {
    store.timer.stopTimer()
  })

  return (
    <div>
      <h1>Finish</h1>
    </div>
  )
}

export default observer(Finish)
