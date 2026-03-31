import { ICity, ICountry, IPhoneNumber } from './autocomplete'

export interface IUser {
  uid: string
  is_full_signed: boolean
  is_demo: boolean
  type_cabinet_code: string
  type_cabinet: string
  user_type_code: string
  user_type: string
  status_code: string
  status: string
  username: string
  email: string
  currency: IUserCurrency
  language: IUserLanguage
  is_employee: boolean
  two_factory: boolean
  type_factory: null
  white_list: unknown[]
  is_single: boolean
  is_learn: boolean
  created_at: string
  company_info: ICompanyInfo
  bank_details: IBankDetails
  physical_data: Record<string, unknown>
  contacts: IContactItem[]
  profile_image: string
  id?: number
  is_active?: boolean
  allow_signin?: boolean
  staff: IStaffInfo
  parent?: {
    uid: string
    email: string
    type_cabinet: string
    user_type: string
    currency: IUserCurrency
  }
}

export interface IStaffInfo {
  firstname: string
  lastname: string
  patronymic: string
  birthday: null
  passport_type: 'NP'
  passport_number: string
  passport_pinfl: string
  passport_expired: null
  passport_issue: null
  country: ICountry
  city: ICity
  address: string
  postcode: null
  phone: IPhoneNumber
  additional_phone: IPhoneNumber
  additional_email: string
  gender: null
  role: {
    uuid: string
    name: string
  }
}
export interface IUserCurrency {
  code: string
  name: string
}

export interface IUserLanguage {
  name: string
  iso_code: string
  iso_code_2: string
}

export interface IContactItem {
  role: string
  email: string
  phone: IPhoneNumber
  full_name: string
  social_contact: null | string
  additional_emails: null | string
}

export interface IBankDetails {
  name: string
  bic_id: null | string
  receiver_invoice: null | string
  correspondent_account: null | string
  mfo_number: string
  okpo_number: null | number
  accountable: null | string
}

export interface ICompanyInfo {
  entity_type: string
  name: string
  name_int: null | string
  email: string
  phone: IPhoneNumber
  country: ICountry
  city: ICity
  address: string
  postcode: null | string
  stir_number: string
  kpp_number: null | number
  orgn_number: null | number
  director_name: null | string
  phys_country: null | ICountry
  phys_city: null | ICity
  phys_address: null | string
  phys_postcode: null | string
  website: null | string
  additional_email: null | string
  additional_phone: null | IPhoneNumber
}
