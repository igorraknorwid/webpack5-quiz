import React from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from '../../index'

const ResultIndicator = () => {
  const { store } = React.useContext(Context)

  const rightResult: number = store.results.results.filter((r) => r.status)
    .length

  return (
    <div className="results_test">
      {store.results.results.map((r, i) => {
        return (
          <>
            {i < rightResult - 1 && <div key={i} className={`right`}></div>}
            {i === rightResult - 1 && (
              <div className="box" key={i}>
                <div className={`active2`}></div>
                <div className={`temprory`}></div>
              </div>
            )}
            {i > rightResult - 1 && <div key={i} className={`normal`}></div>}
          </>
        )
      })}
    </div>
  )
}

export default observer(ResultIndicator)
