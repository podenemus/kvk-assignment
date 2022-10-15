import React, { useEffect, useState } from 'react'

import CompanyList from './CompanyList'
import CompanySearch from './CompanySearch'

const companiesEndpoint =
  'https://617c09aad842cf001711c200.mockapi.io/v1/companies'

export enum SortBy {
  city = 'city',
  createdAt = 'createdAt',
  id = 'id',
  name = 'name',
  streetName = 'streetName',
  zipCode = 'zipCode',
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

interface Props {
  loading: boolean
  setLoading: (loading: boolean) => void
  error: string | null
  setError: (error: string | null) => void
}

function CompanyWrapper({ loading, setLoading, error, setError }: Props) {
  const [companies, setCompanies] =
    useState<CompanyApiResponse['body']['data']>()
  const [total, setTotal] = useState<CompanyApiResponse['body']['total']>()
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.createdAt)
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.ASC)

  const [searchQuery, setSearchQuery] = useState<string>('')

  const getCompanies = (params?: string) => {
    setLoading(true)
    return fetch(`${companiesEndpoint}${params ?? ''}`)
      .then((res) => res.json())
      .then((result) => result)
      .catch((error) => {
        console.error(error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const getAllCompanies = () => {
    if (!loading) {
      getCompanies().then((result) => {
        setCompanies(result?.data)
        setTotal(result?.total)
      })
    }
  }

  const searchCompanies = (query: string) => {
    if (!loading) {
      getCompanies(`?search=${query}`).then((result) => {
        setCompanies(result?.data)
        setTotal(result?.total)
      })
    }
  }

  const getCompanyDetails = (id: string) => getCompanies(`/${id}/details`)

  const getSortedCompanies = (sort: SortBy, order: SortOrder) => {
    getCompanies(`?sortBy=${sort}&order=${order}`).then((result) => {
      setCompanies(result?.data)
      setTotal(result?.total)
    })
  }

  useEffect(() => {
    getAllCompanies()
  }, [])

  useEffect(() => {
    getSortedCompanies(sortBy, sortOrder)
  }, [sortBy, sortOrder])

  return (
    <main className='search-wrapper'>
      <CompanySearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        loading={loading}
        searchCompanies={searchCompanies}
      />
      <CompanyList
        companies={companies}
        loading={loading}
        error={error}
        total={total}
        setError={setError}
        getCompanyDetails={getCompanyDetails}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
    </main>
  )
}

export default CompanyWrapper
