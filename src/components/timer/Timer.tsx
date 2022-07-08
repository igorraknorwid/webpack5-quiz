import React from 'react'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

import { Context } from '../../index'

const Timer = () => {
  const { store } = React.useContext(Context)
  const navigate = useNavigate()
  React.useEffect(() => {
    if (store.timer.timer === 0) {
      navigate('/finish')
    }
  }, [store.timer.timer])
  return <div>Timer : {store.timer.appTimer}</div>
}

export default observer(Timer)
