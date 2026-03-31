export interface IAirline {
  name: string
  code: string
  iata_code: string
  ikao_code: string
  is_lowcost: boolean
  logo: string
}

export interface IAirport {
  name: string
  iata_code: string
  name_rus: string
  name_eng: string
  city_rus: string
  city_eng: string
  gmt_offset: string
  country_rus: string
  country_eng: string
  iso_code: string
  latitude: string
  longitude: string
  hide: number
  is_city: number
  content: string
  is_airport: boolean
}

export interface ICountry {
  country_rus: string
  country_eng: string
  country_uzb: string
  code: string
  phone_code: number
  phone_mask: string
  emoji: string
  unicode: string
  image: string
  latitude?: number
  longitude?: number
}

export interface ILanguage {
  ru: string
  en: string
  uz: string
  value: string
}

export interface ICurrency {
  base: string
  ru: string
  bool: boolean
  disabled: boolean
}
export interface IDocument {
  rule: string
  iso_code: string
  type: string
  country: string[]
  title: string
}

export interface ICity {
  name: string
  state_name: string
  country_name: string
}
export interface IPhoneNumber {
  phone_code: string
  phone_number: string
}
