import React from 'react'

import { Context } from '../../index'

const Start = () => {
  const { store } = React.useContext(Context)

  return (
    <main className="main">
      <h1>Test</h1>
      <div>store.test: {store.test}</div>
    </main>
  )
}

export { Start }
