import React from 'react'

import './styles/Loader.css'

function Loader() {
  return (
    <div className='loader-wrapper' data-testid='loader'>
      <div className='loader'></div>
    </div>
  )
}

export default Loader
