import { Routes, Route } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { Layout } from './components/layout/Layout'
import { Start } from './pages/start/Start'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Start />} />
        </Route>
      </Routes>
    </>
  )
}

export default observer(App)
