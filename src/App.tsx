import React from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from './index'
import { Counter } from './Counter'

const App = () => {
  const { store } = React.useContext(Context)
  console.log('store.test', store.test)
  return (
    <>
      <h1>{store.test}</h1>
      <Counter />
    </>
  )
}

export default observer(App)
