import React from 'react'

interface Props {
  error: string | null
  setError: (value: string | null) => void
}

function Error({ error, setError }: Props) {
  return (
    <div className='error' data-testid='error'>
      <div className='container'>{error}</div>
      <button
        onClick={() => setError(null)}
        className='close-btn'
        aria-label='Sluit foutmelding'
      ></button>
    </div>
  )
}

export default Error
