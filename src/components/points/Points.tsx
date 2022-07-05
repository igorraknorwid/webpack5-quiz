import React from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from '../../index'

const Points = () => {
  const { store } = React.useContext(Context)
  return (
    <header className="header">
      <div>YouPoints: {store.results.points}</div>
    </header>
  )
}

export default observer(Points)
