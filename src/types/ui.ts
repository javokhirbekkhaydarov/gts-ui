export interface IItem {
  label: string
  value: string | number
  icon?: string
  disabled?: boolean
  items?: string[]
}

export type DatepickerModelType = ((Date | Date[] | (Date | null)[]) & (string | Date | Date[] | string[])) | null | undefined

export interface ISidebarItem {
  path: string
  icon?: string
  activeIcon?: string
  label: string
  code: string
  children?: ISidebarItem[]
  disabled?: boolean,
  internal?: boolean,
  pages : string[]
}


export interface BreadcrumbItem {
  label: string
  route?: string
}

export interface BreadcrumbHomeItem{
  icon: string,
  route?: string
}
