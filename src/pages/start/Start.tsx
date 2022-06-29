import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'

import { Context } from '../../index'

const Start = () => {
  const { store } = React.useContext(Context)

  return (
    <main className="main">
      <BrowserView>
        <h1>This is rendered only in browser</h1>
        <h1>Test</h1>
        <div>store.test: {store.test}</div>
      </BrowserView>
      <MobileView>
        <h1>This is rendered only on mobile</h1>
      </MobileView>
    </main>
  )
}

export { Start }
