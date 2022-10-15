import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CompanySearch from '../CompanySearch'

const mockValue = 'Test'
const setSearchQuery = jest.fn()
const searchCompanies = jest.fn()

test('should render company search form', () => {
  render(
    <CompanySearch
      searchQuery={''}
      setSearchQuery={setSearchQuery}
      searchCompanies={searchCompanies}
    />
  )

  const searchInput = screen.getByTestId('searchInput')
  const searchButton = screen.getByTestId('searchButton')

  expect(searchButton).toBeInTheDocument()
  expect(searchButton).toBeEnabled()
  expect(searchInput).toBeInTheDocument()
  expect(searchInput).toBeEmptyDOMElement()
})

test('should fire searchQuery on input change', async () => {
  render(
    <CompanySearch
      searchQuery={''}
      setSearchQuery={setSearchQuery}
      searchCompanies={searchCompanies}
    />
  )

  const searchInput = screen.getByTestId('searchInput')

  expect(searchInput).toHaveValue('')
  fireEvent.change(searchInput, { target: { value: mockValue } })
  expect(setSearchQuery).toHaveBeenCalledWith(mockValue)
  expect(setSearchQuery).toHaveBeenCalledTimes(1)
})

test('should fire searchCompanies on submit', async () => {
  render(
    <CompanySearch
      searchQuery={mockValue}
      setSearchQuery={setSearchQuery}
      searchCompanies={searchCompanies}
    />
  )

  const searchForm = screen.getByTestId('searchForm')
  const searchInput = screen.getByTestId('searchInput')

  expect(searchInput).toHaveValue(mockValue)
  fireEvent.submit(searchForm)
  expect(searchInput).toHaveValue(mockValue)
  expect(searchCompanies).toHaveBeenCalledWith(mockValue)
  expect(searchCompanies).toHaveBeenCalledTimes(1)
})
