import React from 'react'
import './App.css'
import Logo from './Logo'
import CompanySearch from './CompanySearch'

function App() {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Logo />
      </header>
      <CompanySearch />
    </div>
  )
}

export default App
