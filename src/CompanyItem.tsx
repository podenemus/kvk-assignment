import React from 'react'
import Loader from './Loader'

interface Props {
  company: Company
  index: number
  getCompanyDetails: (id: string) => void
}

function CompanyItem({ company, index }: Props) {
  return (
    <div className='company-item vcard' tabIndex={index}>
      <div className='logo'>
        <img
          src={company.logo}
          alt={`Logo van ${company.name}`}
          loading='lazy'
        />
      </div>
      <div className='details'>
        <div className='fn org'>{company.name}</div>

        <address className='adr'>
          <span className='street-address'>{company.streetName}</span>,
          <span className='postal-code'>{company.zipCode}</span>,
          <span className='locality'>{company.city}</span>
        </address>
      </div>
    </div>
  )
}

export default CompanyItem
