import React, { useState } from 'react'

interface Props {
  company: Company
  index: number
  getCompanyDetails?: (id: string) => Promise<CompanyDetailsApiResponse>
}

function CompanyItem({ company, index, getCompanyDetails }: Props) {
  const [details, setDetails] = useState<CompanyDetails | null>(null)
  const [extended, setExtended] = useState(false)

  const handleMoreDetailsClick = async () => {
    if (!details && getCompanyDetails) {
      const result = await getCompanyDetails(company.id)

      if (result?.data?.length) {
        setDetails(result.data[0])
        setExtended(true)
      }
    } else {
      setExtended(true)
    }
  }

  return (
    <div className='company-item vcard'>
      <div className='details'>
        <div className='logo'>
          <img
            src={company.logo}
            alt={`Logo van ${company.name}`}
            loading='lazy'
          />
        </div>

        <h2 className='fn org'>{company.name}</h2>

        {extended ? (
          <button
            onClick={() => setExtended(false)}
            title='Toon minder informatie'
            className='toggle-btn show-less'
          ></button>
        ) : (
          <button
            onClick={handleMoreDetailsClick}
            title='Toon meer informatie'
            className='toggle-btn show-more'
          ></button>
        )}
      </div>

      {details && extended && (
        <div className='extra-details'>
          <h3 className='title'>
            <strong>Meer details</strong>
          </h3>
          <p className='catch-phrase'>{details.catchPhrase}</p>
          <address className='adr'>
            <span className='street-address'>{company.streetName}</span>
            {', '}
            <span className='postal-code'>{company.zipCode}</span>{' '}
            <span className='locality'>{company.city}</span>
          </address>
          <p>
            <a href={`te:${details.phoneNumber}`} className='tel'>
              {details.phoneNumber}
            </a>
            <br />
            <a
              href={details.website}
              target='_blank'
              rel='noopener noreferrer'
              className='url'
            >
              {details.website}
            </a>
          </p>
        </div>
      )}
    </div>
  )
}

export default CompanyItem
