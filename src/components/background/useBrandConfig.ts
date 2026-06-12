interface BrandColors {
  primary: string
  hover?: string
  pressed?: string
  subtler?: string
  subtle?: string
  selectedSubtle?: string
  subtleDarkMode?: string
  subtlerDarkMode?: string
  subtleDarkButton?: string
  subtleDarkButtonHover?: string
  subtleDarkButtonActive?: string
  primaryDark?: string
  hoverDark?: string
  pressedDark?: string
}

interface BrandConfig {
  title?: string
  favicon?: string
  backgroundImage?: string
  loginLayout?: string
  defaultLanguage?: string
  hideFooter?: boolean
  hideBalls?: boolean
  colors?: BrandColors
}

const BRANDS: { hosts: string[]; config: BrandConfig }[] = [
  {
    hosts: ['booking.skdavia.uz', 'booking.skdavia.ru'],
    config: {
      colors: { primary: '#00B5D7' }
    }
  },
  {
    hosts: ['b2b.europe.az'],
    config: {
      colors: { primary: '#143AFF' }
    }
  },
  {
    hosts: ['travel.vatafly.com'],
    config: {
      backgroundImage: '', // link qo'yiladi
      hideBalls: true,
      colors: { primary: '#4A85DD' }
    }
  },
  {
    hosts: ['westdev'],
    config: {
      colors: { primary: '#FED90F' }
    }
  }
]

export const useBrandConfig = (): BrandConfig => {
  const hostname = window.location.hostname.toLowerCase()
  const matched = BRANDS.find((b) => b.hosts.includes(hostname))
  return matched?.config ?? {}
}
