import { MarvelData } from '~/services/model/characters'
import { fetchApi } from '~/services/apis/apiWrapper'

export const getMarvelCharacters = async (offset = 0, limit = 10): Promise<MarvelData> => {
  const response = await fetchApi(`/characters?offset=${offset}&limit=${limit}`)
  return response.data
}
