import React from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from '../../index'

interface IHello {
  name: string
}

const Hello: React.FC<IHello> = ({ name }) => {
  const { store } = React.useContext(Context)
  return <h2>Hello , {name}</h2>
}

export default observer(Hello)
