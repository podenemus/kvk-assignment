import React from 'react'

interface Props {
  companies: Company[] | null
}

function CompanyList({ companies }: Props) {
  if (!companies) {
    return null
  }

  return (
    <div className='company-list overflow-y-auto'>
      {companies?.length &&
        Object.values(companies).map((company: Company, index: number) => (
          <div className='search-item' key={index}>
            {company.name}
          </div>
        ))}
    </div>
  )
}

export default CompanyList
