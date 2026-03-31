import { inject, ComputedRef } from 'vue'

const BASE_URL = 'https://api2.globaltravel.space'
interface RequestConfig {
  headers?: Record<string, string>
  params?: Record<string, string>
  timeout?: number
  baseUrl?: string
}

export function useFetch(config: RequestConfig = {}) {
  const { headers: defaultHeaders = {} } = config
  const {baseUrl} = config

  const injectedBaseUrl = inject<ComputedRef<string>>('baseUrl')

  const createUrl = (url: string, params?: Record<string, string>) => {
    const fullUrl = `${baseUrl || injectedBaseUrl?.value || BASE_URL}${url}`
    if (!params) return fullUrl

    const searchParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, value)
    })

    return `${fullUrl}?${searchParams.toString()}`
  }

  const handleResponse = async <T>(response: globalThis.Response): Promise<T> => {
    return response.json()
  }

  const request = async <T = unknown>(
    method: string,
    url: string,
    { data, params, headers = {}, ...customConfig }: RequestConfig & { data?: unknown } = {},
  ): Promise<T> => {
    try {
      const response = await fetch(createUrl(url, params), {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...defaultHeaders,
          ...headers,
        },
        credentials: 'include',
        body: data ? JSON.stringify(data) : undefined,
        ...customConfig,
      })

      return await handleResponse<T>(response)
    } catch (err) {
      throw err
    }
  }

  return {
    get: <T = unknown>(url: string, config?: RequestConfig) => request<T>('GET', url, config),
    post: <T = unknown>(url: string, data?: unknown, config?: RequestConfig) =>
      request<T>('POST', url, { ...config, data }),
    put: <T = unknown>(url: string, data?: unknown, config?: RequestConfig) =>
      request<T>('PUT', url, { ...config, data }),
    patch: <T = unknown>(url: string, data?: unknown, config?: RequestConfig) =>
      request<T>('PATCH', url, { ...config, data }),
    delete: <T = unknown>(url: string, config?: RequestConfig) => request<T>('DELETE', url, config),
  }
}
