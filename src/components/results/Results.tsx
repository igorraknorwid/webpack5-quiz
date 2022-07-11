import React from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from '../../index'

const ResultIndicator = () => {
  const { store } = React.useContext(Context)

  return (
    <div className="results_test">
      {store.results.results.map((r, i) => {
        if (r.status === 'correct') {
          return <div key={r.id} className="right"></div>
        }
        if (r.status === 'plus') {
          return (
            <div key={r.id} className="plus">
              <div className={`plus__active`}></div>
              <div className={`plus__normal`}></div>
            </div>
          )
        }
        if (r.status === 'fault') {
          return (
            <div key={r.id} className="fault">
              <div className={`fault__active`}></div>
              <div className={`fault__normal`}></div>
            </div>
          )
        }
        if (r.status === 'init') {
          return <div key={r.id} className="normal"></div>
        }
      })}
    </div>
  )
}

export default observer(ResultIndicator)
