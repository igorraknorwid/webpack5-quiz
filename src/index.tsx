import ReactDOM from 'react-dom'
import React, { createContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './styles/index.css'
import './styles/index.scss'
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
    <Router>
      <App />
    </Router>
  </Context.Provider>,
  document.getElementById('root')
)
