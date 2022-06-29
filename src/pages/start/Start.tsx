import React from 'react'

import { Context } from '../../index'

const Start = () => {
  const { store } = React.useContext(Context)
  console.log('store.test', store.test)
  return <main className="main">Start</main>
}

export { Start }
