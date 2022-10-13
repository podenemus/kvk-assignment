import React from 'react'

interface Props {
  searchQuery: string
  setSearchQuery: (query: string) => void
  searchCompanies: () => void
}

function CompanySearch({
  searchQuery,
  setSearchQuery,
  searchCompanies,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    searchCompanies()
  }

  return (
    <section className='search-top'>
      <form className='search-form container'>
        <label htmlFor='search-companies' hidden>
          Bedrijf zoeken
        </label>
        <input
          type='search'
          name='search-companies'
          id='search-companies'
          className='search-input'
          placeholder='Bedrijf zoeken'
          value={searchQuery}
          onChange={(e) => handleChange(e)}
          tabIndex={0}
        />
        <button
          name='search-btn'
          className='search-btn'
          aria-label='Bedrijf zoeken'
          onClick={(e) => handleSubmit(e)}
        >
          Zoeken
        </button>
      </form>
    </section>
  )
}

export default CompanySearch
