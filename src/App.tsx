import { Routes, Route } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { Layout } from './components/layout/Layout'
import Start from './pages/start/Start'
import Question from './pages/question/Question'
import Finish from './pages/finish/Finish'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="quiz/:id" element={<Question />} />
          <Route path="finish" element={<Finish />} />
        </Route>
      </Routes>
    </>
  )
}

export default observer(App)
