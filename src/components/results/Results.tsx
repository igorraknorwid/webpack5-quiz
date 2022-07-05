import React from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from '../../index'

const ResultIndicator = () => {
  const { store } = React.useContext(Context)

  console.log('results live:', store.results.results)

  const rightResult: number = store.results.results.filter((r) => r.status)
    .length

  return (
    <div className="results_test" style={{ width: '1000px' }}>
      {store.results.results.map((r, i) => {
        return (
          <div
            key={r.id}
            className={`result_test ${i < rightResult && 'active'}`}
            style={{ width: '200px' }}
          ></div>
        )
      })}
    </div>
  )
}

export default observer(ResultIndicator)
