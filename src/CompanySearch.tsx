import React from 'react'

import './styles/CompanySearch.css'

interface Props {
  loading?: boolean
  searchQuery: string
  setSearchQuery: (query: string) => void
  searchCompanies: (query: string) => void
}

function CompanySearch({
  loading,
  searchQuery,
  setSearchQuery,
  searchCompanies,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchQuery && !loading) {
      searchCompanies(searchQuery)
    }
  }

  return (
    <section className='search-top'>
      <header className='container search-header'>
        <h1>Zoek een bedrijf</h1>
      </header>

      <form
        className='container search-form'
        onSubmit={(e) => handleSubmit(e)}
        data-testid='searchForm'
      >
        <label htmlFor='search-companies' hidden>
          Bedrijf zoeken
        </label>
        <input
          type='search'
          name='search-companies'
          id='search-companies'
          className='search-input'
          placeholder='Bedrijf zoeken'
          data-testid='searchInput'
          value={searchQuery}
          onChange={(e) => handleChange(e)}
          tabIndex={0}
        />
        <button
          type='submit'
          name='search-btn'
          className='search-btn'
          aria-label='Bedrijf zoeken'
          data-testid='searchButton'
        >
          Zoeken
        </button>
      </form>
    </section>
  )
}

export default CompanySearch
