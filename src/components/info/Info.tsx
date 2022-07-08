import React from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from '../../index'
import Timer from '../timer/Timer'
import Points from '../points/Points'
import ResultIndicator from '../../components/results/Results'
import QuestionIndicator from '../question_indicator/QuestionIndicator'

const Info = () => {
  const { store } = React.useContext(Context)
  return (
    <div>
      <div>
        <Points />
        <QuestionIndicator />
        <Timer />
      </div>
      <ResultIndicator />
    </div>
  )
}

export default observer(Info)
