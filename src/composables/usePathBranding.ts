interface IBrandColors {
  primary: string
  hover: string
  pressed: string
  subtler: string
  subtle: string
  subtleDarkMode: string
  subtlerDarkMode: string
  selectedSubtle: string
  subtleDarkButton: string
  subtleDarkButtonHover: string
  subtleDarkButtonActive: string
}

interface IBrandConfig {
  title: string
  favicon: string
  colors: IBrandColors
}

interface IBrandItem {
  hosts: string[]
  config: IBrandConfig
}

const DEFAULT_BRAND: IBrandConfig = {
  title: 'globaltravelspace',
  favicon: '/favicon.png',
  colors: {
    primary: '#00B5D7',
    hover: '#26A7D0',
    pressed: '#0392B7',
    subtler: '#EEF4FC',
    subtle: '#E2F3FF',
    selectedSubtle: '#D0E4FF',
    subtleDarkMode: '#364156',
    subtlerDarkMode: '#364156',
    subtleDarkButton: '#1A3A4A',
    subtleDarkButtonHover: '#234D5E',
    subtleDarkButtonActive: '#2C5F72'
  }
}

const BRANDS: IBrandItem[] = [
  {
    hosts: ['booking.skdavia.uz', 'booking.skdavia.ru'],
    config: {
      title: 'SKD Avia',
      favicon: 'https://qtmxmkrytw.ufs.sh/f/upwn8ziMN3SoiXf8ehsOasZdLcGnRvyTYBxHEwm2bkeFI7UJ',
      colors: {
        primary: '#00B5D7',
        hover: '#26A7D0',
        pressed: '#0392B7',
        subtler: '#EEF4FC',
        subtle: '#E2F3FF',
        subtleDarkMode: '#364156',
        subtlerDarkMode: '#364156',
        subtleDarkButton: '#1A3A4A',
        subtleDarkButtonHover: '#234D5E',
        subtleDarkButtonActive: '#2C5F72',
        selectedSubtle: '#D0E4FF'
      }
    },
  },
  {
    hosts: ['b2b.europe.az', 'localhost', 'test.globaltravel.space'],
    config: {
      title: 'Europe Booking Assistance',
      favicon: '/logo/europe-tf-favicon.ico',
      colors: {
        primary: '#143AFF',
        hover: '#1230E8',
        pressed: '#0F26CC',
        subtler: '#EEF1FF',
        subtle: '#DCE5FF',
        subtleDarkMode: '#1A2B5C',
        subtlerDarkMode: '#1A2B5C',
        subtleDarkButton: '#0D1E4A',
        subtleDarkButtonHover: '#152560',
        subtleDarkButtonActive: '#1C2E72',
        selectedSubtle: '#C5D0FF'
      }
    }
  },
  {
    hosts: ['westdev'],
    config: {
      title: 'Creative Travel',
      favicon: 'https://qtmxmkrytw.ufs.sh/f/upwn8ziMN3SojqtAmEGI5qWXFmNnz70tsE6DYarp29gGOidK',
      colors: {
        primary: '#FED90F',
        hover: '#FDC621',
        pressed: '#FDC621',
        subtler: '#f7f2dc',
        subtle: '#FFF1B8',
        subtleDarkMode: '#364156',
        subtleDarkButton: '#4A4220',
        subtleDarkButtonHover: '#5C512A',
        subtleDarkButtonActive: '#6B5F32',
        subtlerDarkMode: '#364156',
        selectedSubtle: '#FFEA99'
      }
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
    const { title, favicon, colors } = getBrandingByDomain()

    if (typeof document !== 'undefined') {
      document.title = title
      let faviconLink = document.querySelector('link[rel="icon"]')
      if (!faviconLink) {
        faviconLink = document.createElement('link')
        faviconLink.setAttribute('rel', 'icon')
        document.head.appendChild(faviconLink)
      }
      faviconLink.setAttribute('type', 'image/x-icon')
      faviconLink.setAttribute('href', favicon)

      const root = document.documentElement
      root.style.setProperty('--brand-primary', colors.primary)
      root.style.setProperty('--brand-primary-hover', colors.hover)
      root.style.setProperty('--brand-primary-pressed', colors.pressed)
      root.style.setProperty('--brand-primary-subtler', colors.subtler)
      root.style.setProperty('--brand-primary-subtle', colors.subtle)
      root.style.setProperty('--brand-primary-selected-subtle', colors.selectedSubtle)
      root.style.setProperty('--background-accent-blue-subtler', colors.subtler)
      root.style.setProperty('--background-accent-blue-subtle', colors.subtle)
      root.style.setProperty('--brand-primary-subtleDarkMode', colors.subtleDarkMode)
      root.style.setProperty('--brand-primary-subtlerDarkMode', colors.subtlerDarkMode)
      root.style.setProperty('--background-accent-blue-subtleDarkButton', colors.subtleDarkButton)
      root.style.setProperty('--background-accent-blue-subtleDarkButtonHover', colors.subtleDarkButtonHover)
      root.style.setProperty('--background-accent-blue-subtleDarkButtonActive', colors.subtleDarkButtonActive)
    }

    return { title, favicon, colors }
  }

  return { applyPathBranding }
}
