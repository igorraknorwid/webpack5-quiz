import React from 'react'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="p-3 mb-2 bg-primary text-white d-flex justify-content-between align-items-center">
      <div>
        <Link to="/">
          {' '}
          <h2>Quizes</h2>
        </Link>
      </div>
      <div>
        <a
          href="https://github.com/igorraknorwid/webpack5-quiz"
          rel="noreferrer"
          target="_blank"
        >
          Git Hub
        </a>
      </div>
    </header>
  )
}

export default observer(Header)
