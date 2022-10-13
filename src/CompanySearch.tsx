import React, { useEffect, useState } from 'react'
import CompanyList from './CompanyList'

function CompanySearch() {
  const [companies, setCompanies] = useState<Company[] | null>(null)

  useEffect(() => {
    fetch('https://617c09aad842cf001711c200.mockapi.io/v1/companies', {
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
        }
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className='search-wrapper'>
      <section className='search-top'>
        <div className='container'>
          <input type='search' name='search' />
        </div>
      </section>
      <section className='search-results container'>
        <CompanyList companies={companies} />
      </section>
    </div>
  )
}

export default CompanySearch
