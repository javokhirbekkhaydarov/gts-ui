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
  primaryDark?: string
  hoverDark?: string
  pressedDark?: string
  sidebarBg?: string
  sidebarBgHover?: string
  sidebarText?: string
}

interface IBrandFooter {
  hidden?: boolean
  copyright?: string
  showBrandLogos?: boolean
  showPaymentLogos?: boolean
  poweredBy?: string | null
}

interface IBrandConfig {
  title: string
  favicon: string
  colors: IBrandColors
  logo?: string
  shortLogo?: string
  mode?: 'dark' | 'light'
  backgroundImage?: string
  loginLayout?: string
  defaultLanguage?: string
  hideBalls?: boolean
  footer?: IBrandFooter
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
    }
  },
  {
    hosts: ['b2b.europe.az'],
    config: {
      title: 'Europe Booking Assistance',
      favicon: 'https://qtmxmkrytw.ufs.sh/f/upwn8ziMN3SoFY1zaQlfCWlEYB2JRFmStkXaw8hZc3Nz5enq',
      shortLogo: 'https://qtmxmkrytw.ufs.sh/f/upwn8ziMN3SoFY1zaQlfCWlEYB2JRFmStkXaw8hZc3Nz5enq',
      logo: 'https://qtmxmkrytw.ufs.sh/f/upwn8ziMN3SoOMBjSaZ53wU9et0uZYREskrBGaODFl1J7mjb',
      backgroundImage: 'https://qtmxmkrytw.ufs.sh/f/upwn8ziMN3SoWYaXVJ11qDX6JmaUpMEZ5jNu7wCiSzhrvgV0',
      defaultLanguage: 'AZ',
      hideBalls: true,
      colors: {
        primary: '#143AFF',
        hover: '#1230E8',
        pressed: '#0F26CC',
        subtler: '#EEF1FF',
        subtle: '#DCE5FF',
        subtleDarkMode: '#364156',
        subtleDarkButton: '#4A4220',
        subtleDarkButtonHover: '#5C512A',
        subtleDarkButtonActive: '#6B5F32',
        subtlerDarkMode: '#364156',
        selectedSubtle: '#FFEA99',
        primaryDark: '#FFC700',
        hoverDark: '#E6B300',
        pressedDark: '#CC9F00'
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
    }
  },
  {
    hosts: ['travel.vatafly.com'],
    config: {
      title: 'Vata Fly',
      favicon: 'https://qtmxmkrytw.ufs.sh/f/upwn8ziMN3SoGmcHZNM6OtwS0DdhBLNq8x3pY1Pu7mcWsCr9',
      shortLogo: 'https://qtmxmkrytw.ufs.sh/f/upwn8ziMN3SoGmcHZNM6OtwS0DdhBLNq8x3pY1Pu7mcWsCr9',
      logo: 'https://qtmxmkrytw.ufs.sh/f/upwn8ziMN3SoQbElmmdb5kJHPzX3mYwNRsy4ZergShj7If2d',
      backgroundImage: 'https://qtmxmkrytw.ufs.sh/f/upwn8ziMN3SoATW7v4ntqW65x90cCjFiM3NfTukyzwYshEaV',
      loginLayout: 'vata-fly',
      defaultLanguage: 'AZ',
      hideBalls: true,
      footer: {
        hidden: true
      },
      colors: {
        primary: '#4A85DD',
        hover: '#447ACB',
        pressed: '#3D6DB5',
        subtler: '#F1F5FC',
        subtle: '#E2EBFA',
        selectedSubtle: '#CCDDF5',
        subtleDarkMode: '#21314D',
        subtlerDarkMode: '#21314D',
        subtleDarkButton: '#1E2A41',
        subtleDarkButtonHover: '#233452',
        subtleDarkButtonActive: '#263C5F'
      }
    }
  },
  {
    // hosts: ['b2b.carlton.az'],
    hosts: ['b2b.carlton.az'],
    config: {
      title: 'Carlton Travel Assistance',
      favicon: 'https://qtmxmkrytw.ufs.sh/f/upwn8ziMN3SoTSHjyUIw9cE7hRYbvXpdSDVfaPNgzxwLKkl4',
      shortLogo: 'https://qtmxmkrytw.ufs.sh/f/upwn8ziMN3SoTSHjyUIw9cE7hRYbvXpdSDVfaPNgzxwLKkl4',
      logo: 'https://qtmxmkrytw.ufs.sh/f/upwn8ziMN3SoQryG2Kdb5kJHPzX3mYwNRsy4ZergShj7If2d',
      backgroundImage: 'https://qtmxmkrytw.ufs.sh/f/upwn8ziMN3SoixgpiUsOasZdLcGnRvyTYBxHEwm2bkeFI7UJ',
      mode: 'dark',
      loginLayout: 'carlton',
      defaultLanguage: 'AZ',
      hideBalls: true,
      footer: {
        hidden: false
      },
      colors: {
        primary: '#CDA63A',
        hover: '#B8922F',
        pressed: '#A37E28',
        subtler: '#FDF6E3',
        subtle: '#FAF0D0',
        selectedSubtle: '#F5E4A8',
        subtleDarkMode: '#2C1E08',
        subtlerDarkMode: '#2C1E08',
        subtleDarkButton: '#3D2A0A',
        subtleDarkButtonHover: '#4A3310',
        subtleDarkButtonActive: '#563C14',
        sidebarBg: '#1C1208',
        sidebarBgHover: '#2D1E0C',
        sidebarText: '#FFFFFF'
      }
    }
  },
  {
    // hosts: ['pro.goldenasialuxe.uz/'],
    hosts: ['localhost', 'pro.goldenasialuxe.uz'],
    config: {
      title: 'Golden Asia Luxe',
      favicon: 'https://qtmxmkrytw.ufs.sh/f/upwn8ziMN3SolElEqceRFnAlurT9KI0JGv4qXH68ZNy5b7Le',
      shortLogo: 'https://qtmxmkrytw.ufs.sh/f/upwn8ziMN3SolElEqceRFnAlurT9KI0JGv4qXH68ZNy5b7Le',
      logo: 'https://qtmxmkrytw.ufs.sh/f/upwn8ziMN3Sobose3ruLJPbFnC6DvoUphAlgjZE9BYKef2tw',
      loginLayout: 'golden-asia-luxe',
      colors: {
        primary: '#F5A800',
        hover: '#FDC621',
        pressed: '#D49200',
        subtler: '#f7f2dc',
        subtle: '#FFF1B8',
        subtleDarkMode: '#364156',
        subtleDarkButton: '#4A4220',
        subtleDarkButtonHover: '#5C512A',
        subtleDarkButtonActive: '#6B5F32',
        subtlerDarkMode: '#364156',
        selectedSubtle: '#FFEA99'
      }
    }
  },
]

const DEFAULT_FOOTER: Required<IBrandFooter> = {
  hidden: false,
  copyright: '© Globaltravel.space | All rights reserved',
  showBrandLogos: true,
  showPaymentLogos: true,
  poweredBy: null
}

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

      if (colors.primaryDark) {
        let brandDarkStyle = document.getElementById('brand-dark-overrides')
        if (!brandDarkStyle) {
          brandDarkStyle = document.createElement('style')
          brandDarkStyle.id = 'brand-dark-overrides'
          document.head.appendChild(brandDarkStyle)
        }
        brandDarkStyle.textContent = `
          .dark-mode {
            --brand-primary: ${colors.primaryDark} !important;
            --brand-primary-hover: ${colors.hoverDark} !important;
            --brand-primary-pressed: ${colors.pressedDark} !important;
            --brand-primary-subtle: ${colors.subtleDarkMode}!important;
          }
        `
      }

      if (colors.sidebarBg) {
        let sidebarStyle = document.getElementById('brand-sidebar-overrides')
        if (!sidebarStyle) {
          sidebarStyle = document.createElement('style')
          sidebarStyle.id = 'brand-sidebar-overrides'
          document.head.appendChild(sidebarStyle)
        }
        sidebarStyle.textContent = `
          .navigation-sidebar {
            background-color: ${colors.sidebarBg} !important;
          }
          .navigation-sidebar .navigation-sidebar__link:not(.disable):hover {
            background-color: ${colors.sidebarBgHover} !important;
          }
          .navigation-sidebar .navigation-sidebar__link {
            color: ${colors.sidebarText} !important;
          }
          .navigation-sidebar .navigation-sidebar__link.active {
            color: ${colors.primary} !important;
          }
          .navigation-sidebar .navigation-sidebar__link.active .navigation-sidebar__more:before {
            color: ${colors.primary} !important;
          }
        `
      }
    }

    return { title, favicon, colors }
  }

  const getBrandConfig = (): IBrandConfig => {
    return getBrandingByDomain()
  }

  const getLoginLayout = (): string => {
    const config = getBrandingByDomain()
    return config.loginLayout || 'default'
  }

  const getDefaultLanguage = (): string | null => {
    const config = getBrandingByDomain()
    return config.defaultLanguage?.toLowerCase() || null
  }

  const getFooterConfig = (): Required<IBrandFooter> => {
    const config = getBrandingByDomain()
    return { ...DEFAULT_FOOTER, ...config.footer }
  }

  const isFooterHidden = (): boolean => getFooterConfig().hidden

  const getBackgroundConfig = (): { backgroundImage: string | null; hideBalls: boolean } => {
    const config = getBrandingByDomain()
    return {
      backgroundImage: config.backgroundImage || null,
      hideBalls: config.hideBalls === true
    }
  }

  const getBrandLogo = (): string | null => {
    const config = getBrandingByDomain()
    return config.logo || null
  }

  const getBrandShortLogo = (): string | null => {
    const config = getBrandingByDomain()
    return config.shortLogo || null
  }

  const getDefaultDarkMode = (): boolean => {
    const config = getBrandingByDomain()
    return config.mode === 'dark'
  }

  return {
    applyPathBranding,
    getBrandConfig,
    getBrandLogo,
    getBrandShortLogo,
    getDefaultDarkMode,
    getLoginLayout,
    getDefaultLanguage,
    isFooterHidden,
    getFooterConfig,
    getBackgroundConfig
  }
}
