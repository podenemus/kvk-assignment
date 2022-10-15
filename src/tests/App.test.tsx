import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

const setError = jest.fn()

test('renders header and company search components', () => {
  render(<App />)

  expect(screen.getByTestId('header')).toBeInTheDocument()
  expect(screen.getByTestId('logo')).toBeInTheDocument()
  expect(screen.getByTestId('searchButton')).toBeEnabled()
  expect(screen.getByTestId('searchInput')).toBeInTheDocument()
  expect(screen.getByTestId('companiesListWrapper')).toBeInTheDocument()
})
