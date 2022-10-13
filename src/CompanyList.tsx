import React from 'react'
import Loader from './Loader'
import CompanyItem from './CompanyItem'
import Error from './Error'

interface Props {
  companies: Company[] | null
  loading: boolean
  error: string | null
  setError: (error: string | null) => void
  getCompanyDetails: (id: string) => void
}

function CompanyList({
  companies,
  loading,
  error,
  setError,
  getCompanyDetails,
}: Props) {
  return (
    <section className='search-results container' id='searchResults'>
      <div className='search-results-inner'>
        {!!error && <Error error={error} setError={setError} />}
        {loading && <Loader />}
        {!companies?.length && !loading && <p>Geen resultaten gevonden</p>}
        <div className='company-list overflow-y-auto'>
          {companies?.length &&
            Object.values(companies).map((company: Company, index: number) => (
              <CompanyItem
                company={company}
                index={index}
                key={index}
                getCompanyDetails={getCompanyDetails}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyList
