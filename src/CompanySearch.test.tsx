import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('company search', () => {
  render(<App />)

  const searchInput = screen.getByRole('searchbox')
  const searchButton = screen.getByRole('button', { name: 'Bedrijf zoeken' })

  expect(searchButton).toBeEnabled()
  expect(searchInput).toBeEmpty()

  fireEvent.change(searchInput, { target: { value: 'Feest' } })
  expect(searchInput).toHaveValue('Feest')

  fireEvent.click(searchButton)

  //assert the expected result
  expect(document.getElementById('searchResults')).toBeInTheDocument()
})
