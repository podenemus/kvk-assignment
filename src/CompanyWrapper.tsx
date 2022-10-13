import React, { useEffect, useState, useCallback } from 'react'

import CompanyList from './CompanyList'
import CompanySearch from './CompanySearch'

const companiesEndpoint =
  'https://617c09aad842cf001711c200.mockapi.io/v1/companies'

function CompanyWrapper() {
  const [companies, setCompanies] = useState<Company[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = React.useState('')

  const fetchCompanies = (id?: string | null, query?: string) => {
    setLoading(true)
    const searchParams = query ? `?search=${query}` : ''
    const companyId = id ? `/${id}/details` : ''
    fetch(`${companiesEndpoint}${companyId}${searchParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data)
        if (result?.data?.length) {
          setCompanies(result.data)
          setLoading(false)
        }
      })
      .catch((error) => {
        console.error(error)
        setError(error)
      })
  }

  useEffect(() => {
    fetchCompanies()
  }, [])

  const searchCompanies = useCallback(() => {
    fetchCompanies(null, searchQuery)
  }, [searchQuery])

  const getCompanyDetails = useCallback((id: string) => {
    fetchCompanies(id)
  }, [])

  return (
    <main className='search-wrapper'>
      <CompanySearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchCompanies={searchCompanies}
      />
      <CompanyList
        companies={companies}
        loading={loading}
        error={error}
        setError={setError}
        getCompanyDetails={getCompanyDetails}
      />
    </main>
  )
}

export default CompanyWrapper
