import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'

import { Context } from '../../index'
import jpg from '../../assets/image/jpg.jpg'
import png from '../../assets/image/png.png'
import svg_img from '../../assets/image/svg.svg'

const Start = () => {
  const { store } = React.useContext(Context)

  return (
    <main className="main">
      <BrowserView>
        <h1>This is rendered only in browser</h1>
        <h1>Test</h1>
        <div>store.test: {store.test}</div>
        <img src={jpg} alt="" />
        <img src={png} alt="" />
        <img src={svg_img} alt="" />
      </BrowserView>
      <MobileView>
        <h1>This is rendered only on mobile</h1>
      </MobileView>
    </main>
  )
}

export { Start }
