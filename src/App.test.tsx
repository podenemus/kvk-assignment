import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders header and company search components', () => {
  render(<App />)

  expect(document.getElementsByTagName('header')[0]).toBeInTheDocument()
  expect(document.getElementById('logo')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Bedrijf zoeken' })).toBeEnabled()
  expect(screen.getByRole('searchbox')).toBeInTheDocument()
  expect(document.getElementById('searchResults')).toBeInTheDocument()
})
