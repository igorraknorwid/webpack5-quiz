import ReactDOM from 'react-dom'
import React, { createContext } from 'react'
import { App } from './App'
import './index.css'
import './index.scss'
import appStore from './store/store'

interface State {
  store: appStore
}

export const store = new appStore()

export const Context = createContext<State>({
  store,
})

ReactDOM.render(
  <Context.Provider value={{ store }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
)
