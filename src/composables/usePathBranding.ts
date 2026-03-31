interface IBrandColors {
  primary: string
  hover: string
  pressed: string
  subtler: string
  subtle: string
  selectedSubtle: string
}

interface IBrandConfig {
  colors: IBrandColors
}

interface IBrandItem {
  hosts: string[]
  config: IBrandConfig
}

const DEFAULT_BRAND: IBrandConfig = {
  colors: {
    primary: '#00B5D7',
    hover: '#26A7D0',
    pressed: '#0392B7',
    subtler: '#EEF4FC',
    subtle: '#E2F3FF',
    selectedSubtle: '#D0E4FF',
  },
}

const BRANDS: IBrandItem[] = [
  {
    hosts: ['booking.skdavia.uz', 'booking.skdavia.ru'],
    config: {
      colors: {
        primary: '#00B5D7',
        hover: '#26A7D0',
        pressed: '#0392B7',
        subtler: '#EEF4FC',
        subtle: '#E2F3FF',
        selectedSubtle: '#D0E4FF',
      },
    },
  },
  {
    hosts: ['b2b.creativetravel.uz', 'localhost', 'test.globaltravel.space'],
    config: {
      colors: {
        primary: '#FED90F',
        hover: '#FDC621',
        pressed: '#FDC621',
        subtler: '#f7f2dc',
        subtle: '#FFF1B8',
        selectedSubtle: '#FFEA99',
      },
    },
  },
]

export const usePathBranding = () => {
  const getHostname = () => {
    if (typeof window === 'undefined') return ''
    return window.location.hostname.toLowerCase()
  }

  const getBrandingByDomain = (): IBrandConfig => {
    const hostname = getHostname()
    const matchedBrand = BRANDS.find((brand) => brand.hosts.includes(hostname))
    return matchedBrand ? matchedBrand.config : DEFAULT_BRAND
  }

  const applyPathBranding = (): IBrandConfig => {
    const { colors } = getBrandingByDomain()

    if (typeof document !== 'undefined') {
      const root = document.documentElement
      root.style.setProperty('--brand-primary', colors.primary)
      root.style.setProperty('--brand-primary-hover', colors.hover)
      root.style.setProperty('--brand-primary-pressed', colors.pressed)
      root.style.setProperty('--brand-primary-subtler', colors.subtler)
      root.style.setProperty('--brand-primary-subtle', colors.subtle)
      root.style.setProperty('--brand-primary-selected-subtle', colors.selectedSubtle)
      root.style.setProperty('--background-accent-blue-subtler', colors.subtler)
      root.style.setProperty('--background-accent-blue-subtle', colors.subtle)
    }

    return { colors }
  }

  return { applyPathBranding }
}

