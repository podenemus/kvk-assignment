import React from 'react'
import { render, screen } from '@testing-library/react'
import CompanyList from '../CompanyList'
import { SortBy, SortOrder } from '../CompanyWrapper'

const mockFunction = jest.fn()
const mockedCompanies = [
  {
    id: '1',
    name: 'Wintheiser Group',
    city: 'West Esteban',
    zipCode: '97018',
    streetName: 'Lilly View',
    logo: 'https://via.placeholder.com/150',
    createdAt: '2021-07-16T19:41:28.272Z',
  },
  {
    id: '2',
    name: 'Feest, Schinner and Lowe',
    city: 'New Ahmad',
    zipCode: '07811',
    streetName: 'Bartell Tunnel',
    logo: 'https://via.placeholder.com/150',
    createdAt: '2021-10-03T18:37:01.931Z',
  },
]

const errorMessage = 'Dit is een error'

test('should render no companies found message', () => {
  render(
    <CompanyList
      companies={[]}
      setError={mockFunction}
      loading={false}
      getCompanyDetails={mockFunction}
      sortBy={SortBy.createdAt}
      setSortBy={mockFunction}
      sortOrder={SortOrder.ASC}
      setSortOrder={mockFunction}
    />
  )
  expect(screen.getByTestId('companiesListWrapper')).toBeInTheDocument()
  expect(screen.getByTestId('noCompaniesFound')).toBeInTheDocument()
})

test('should render loader', () => {
  render(
    <CompanyList
      companies={[]}
      loading
      setError={mockFunction}
      getCompanyDetails={mockFunction}
      sortBy={SortBy.createdAt}
      setSortBy={mockFunction}
      sortOrder={SortOrder.ASC}
      setSortOrder={mockFunction}
    />
  )

  expect(screen.getByTestId('companiesListWrapper')).toBeInTheDocument()
  expect(screen.getByTestId('loader')).toBeInTheDocument()
})

test('should render error', () => {
  render(
    <CompanyList
      companies={[]}
      setError={mockFunction}
      error={errorMessage}
      loading={false}
      getCompanyDetails={mockFunction}
      sortBy={SortBy.createdAt}
      setSortBy={mockFunction}
      sortOrder={SortOrder.ASC}
      setSortOrder={mockFunction}
    />
  )

  expect(screen.getByTestId('companiesListWrapper')).toBeInTheDocument()
  expect(screen.getByTestId('error')).toBeInTheDocument()
  expect(screen.getByTestId('error')).toHaveTextContent(errorMessage)
})

test('should render all mocked companies', () => {
  render(
    <CompanyList
      companies={mockedCompanies}
      setError={mockFunction}
      loading={false}
      getCompanyDetails={mockFunction}
      sortBy={SortBy.createdAt}
      setSortBy={mockFunction}
      sortOrder={SortOrder.ASC}
      setSortOrder={mockFunction}
    />
  )

  expect(screen.getByTestId('companiesListWrapper')).toBeInTheDocument()

  mockedCompanies.forEach((mockCompany) => {
    expect(screen.getByText(mockCompany.name)).toBeInTheDocument()
  })
})
