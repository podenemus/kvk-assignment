import React, { useState } from 'react'

import './styles/Variables.css'
import './styles/Typography.css'
import './styles/App.css'
import Logo from './Logo'
import CompanyWrapper from './CompanyWrapper'

function App() {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  return (
    <>
      <header className='header' data-testid='header'>
        <Logo />
      </header>
      <CompanyWrapper
        loading={loading}
        setLoading={setLoading}
        error={error}
        setError={setError}
      />
    </>
  )
}

export default App
