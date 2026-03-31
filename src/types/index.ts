export type LocaleTypes = 'en' | 'ru' | 'uz'

export type ServicesTypes = 'flights' | 'hotels' | 'railway' | 'transfers' | 'tours' | 'insurance' | 'excursions' | 'esim' | 'cruises' | 'rentcar'

export interface IService {
  id: number
  label: Record<LocaleTypes, string>
  icon: string
  value: ServicesTypes
  env?: EnvTypes[]
}

export interface IProvider {
  name: string
  secret_name: string
  minimum_amount: string
  time_gmt: string
  currency: string
  iata_number: string
  is_test: boolean
  status: string
  balance: number
}

export interface IContractBalance {
  balance: number
  currency: string
}

export type ResponseStatus = 'success' | 'error' | 'In process'

export interface IResponse<T> {
  data: T
  status: ResponseStatus
  message: string
  code: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any[]
}

export interface IPagination {
  page: number
  pages: number
  per_page: number
  total: number
}

export type EnvTypes = 'production' | 'development' | 'local'

export interface ISignInResponse {
  user: {
    uid: string
    user_type: string
    apis: string[]
  }
}
