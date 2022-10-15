import React from 'react'
import Loader from './Loader'
import CompanyItem from './CompanyItem'
import Error from './Error'

import './styles/CompanyList.css'
import Toolbar from './Toolbar'
import { SortBy, SortOrder } from './CompanyWrapper'

interface Props {
  companies?: CompanyApiResponse['body']['data']
  total?: CompanyApiResponse['body']['total']
  loading: boolean
  error?: string | null
  setError: (error: string | null) => void
  getCompanyDetails: (id: string) => Promise<CompanyDetailsApiResponse>
  sortBy: SortBy
  sortOrder: SortOrder
  setSortBy: (sort: SortBy) => void
  setSortOrder: (order: SortOrder) => void
}

function CompanyList({
  companies,
  total,
  loading,
  error,
  setError,
  getCompanyDetails,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}: Props) {
  return (
    <section
      className='search-results container'
      data-testid='companiesListWrapper'
    >
      <div className='search-results-inner'>
        {!!error && <Error error={error} setError={setError} />}
        <Toolbar
          total={total}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        {!companies?.length && !loading && (
          <p className='no-results' data-testid='noCompaniesFound'>
            Geen bedrijven gevonden
          </p>
        )}
        <div className='company-list overflow-y-auto'>
          {!!companies?.length &&
            Object.values(companies).map((company: Company, index: number) => (
              <CompanyItem
                company={company}
                index={index}
                key={index}
                getCompanyDetails={getCompanyDetails}
              />
            ))}
        </div>
        {loading && <Loader />}
      </div>
    </section>
  )
}

export default CompanyList
