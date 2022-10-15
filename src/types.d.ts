interface Company {
  city: string
  createdAt: string
  id: string
  logo: string
  name: string
  streetName: string
  zipCode: string
}

interface CompanyDetails {
  catchPhrase: string
  companyId: string
  id: string
  phoneNumber: string
  website: string
}

interface CompanyApiResponse {
  status: number
  statusText: string
  body: {
    data: Company[] | []
    total?: number
  }
  error: any
  loading: boolean
}

interface CompanyDetailsApiResponse {
  data: CompanyDetails[]
}
