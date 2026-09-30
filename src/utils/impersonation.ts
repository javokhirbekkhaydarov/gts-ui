import axios from 'axios'

// CP forced login ("Принудительный вход") is tab-scoped: the redeem page in b2b
// stores the session in sessionStorage, and every product on the same origin
// reads it from there. Key names must stay identical to b2b's
// src/utils/impersonation.js so a forced tab keeps working across products.
export const IMPERSONATION_AUTH_KEY = 'gts_impersonation_auth'
export const IMPERSONATION_CONTEXT_KEY = 'gts_impersonation_context'
export const IMPERSONATION_TAB_KEY = 'gts_impersonation_tab'
export const IMPERSONATION_ENDED_PATH = '/impersonation/ended'
const IMPERSONATION_IDENTITY_PREFIX = 'gts_impersonation_identity_'
const IMPERSONATION_FLOW_KEYS = ['offer', 'offerData', 'booking', 'hasUpsell', 'railway.booking.offer']

export interface ImpersonationAuth {
  sessionId: string
  token: string
  expiresAt?: string
}

export interface ImpersonationContext {
  active?: boolean
  expires_at?: string
  reason?: string
  actor?: { email?: string }
  target?: { company?: string; email?: string }
}

function parse<T>(value: string | null): T | null {
  try {
    return value ? (JSON.parse(value) as T) : null
  } catch {
    return null
  }
}

export function getImpersonationAuth(): ImpersonationAuth | null {
  const auth = parse<ImpersonationAuth>(sessionStorage.getItem(IMPERSONATION_AUTH_KEY))
  if (!auth?.sessionId || !auth?.token) return null
  return auth
}

export function isImpersonating(): boolean {
  const auth = getImpersonationAuth()
  return Boolean(auth && (!auth.expiresAt || new Date(auth.expiresAt).getTime() > Date.now()))
}

export function isImpersonationTab(): boolean {
  return sessionStorage.getItem(IMPERSONATION_TAB_KEY) === '1'
}

export function getImpersonationContext(): ImpersonationContext | null {
  return parse<ImpersonationContext>(sessionStorage.getItem(IMPERSONATION_CONTEXT_KEY))
}

export function getImpersonationHeader(): string | null {
  const auth = getImpersonationAuth()
  return auth ? `Impersonation ${auth.sessionId};${auth.token}` : null
}

export function getActiveIdentity(key: string): string | null {
  if (isImpersonating()) {
    return sessionStorage.getItem(`${IMPERSONATION_IDENTITY_PREFIX}${key}`)
  }
  return localStorage.getItem(key)
}

export function setActiveIdentity(key: string, value?: string | null) {
  const storageKey = isImpersonating() ? `${IMPERSONATION_IDENTITY_PREFIX}${key}` : key
  const storage = isImpersonating() ? sessionStorage : localStorage
  if (value === undefined || value === null) storage.removeItem(storageKey)
  else storage.setItem(storageKey, value)
}

// In-progress booking state must not leak between the regular user's tabs and
// the forced-login tab.
export function getActiveFlowStorage(): Storage {
  return isImpersonationTab() ? sessionStorage : localStorage
}

export function clearImpersonationFlowState() {
  IMPERSONATION_FLOW_KEYS.forEach((key) => sessionStorage.removeItem(key))
}

export function endImpersonationSession() {
  sessionStorage.removeItem(IMPERSONATION_AUTH_KEY)
  sessionStorage.removeItem(IMPERSONATION_CONTEXT_KEY)
  Object.keys(sessionStorage)
    .filter((key) => key.startsWith(IMPERSONATION_IDENTITY_PREFIX))
    .forEach((key) => sessionStorage.removeItem(key))
  clearImpersonationFlowState()
  sessionStorage.setItem(IMPERSONATION_TAB_KEY, '1')
}

// The ended page lives in b2b (served at the origin root).
export function goToImpersonationEnded() {
  window.location.assign(IMPERSONATION_ENDED_PATH)
}

let interceptorInstalled = false

// Products call the global axios directly (their useAxios sends the agency
// cookie). In a forced-login tab every request must be authorised by the
// impersonation session instead, so gts-ui hooks the host app's axios on install.
export function installImpersonationInterceptor() {
  if (interceptorInstalled) return
  interceptorInstalled = true

  axios.interceptors.request.use((config) => {
    const header = getImpersonationHeader()
    if (header) {
      config.headers.Authorization = header
      config.withCredentials = false
    } else if (isImpersonationTab()) {
      endImpersonationSession()
      goToImpersonationEnded()
      return Promise.reject(new axios.CanceledError('Impersonation session expired'))
    }
    return config
  })

  axios.interceptors.response.use(undefined, (error) => {
    if (error?.response?.status === 401 && getImpersonationHeader()) {
      endImpersonationSession()
      goToImpersonationEnded()
    }
    return Promise.reject(error)
  })
}
