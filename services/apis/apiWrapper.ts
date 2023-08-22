import md5 from 'md5'
import { useRuntimeConfig } from '#app/nuxt'

export const fetchApi = async (endpoint: string) => {
  const { baseUrl, privateKey, publicKey } = useRuntimeConfig().public

  const ts = Date.now().toString()
  const hash = md5(ts + privateKey + publicKey)

  const url = `${baseUrl}${endpoint}&apikey=${publicKey}&ts=${ts}&hash=${hash}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Marvel API Fetch Error: ${response.statusText}`)
  }

  return await response.json()
}
