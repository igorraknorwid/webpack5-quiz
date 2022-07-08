import React from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from '../../index'
import Hello from '../hello/Hello'

const Header = () => {
  const { store } = React.useContext(Context)
  return (
    <header className="header">
      <div>
        <h2>Quiz App</h2>
        <div>GitHub</div>
        {/* {store.name&&<Hello name={store.name} />}
        {store.isStart&& <div>Timer : {store.timer.appTimer}</div>}        */}
      </div>
    </header>
  )
}

export default observer(Header)
