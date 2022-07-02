import { observer } from 'mobx-react-lite'
import { useParams, Link } from 'react-router-dom'

const Question = () => {
  const { id } = useParams()
  return (
    <>
      <h1>Question {id}</h1>
    </>
  )
}

export default observer(Question)
