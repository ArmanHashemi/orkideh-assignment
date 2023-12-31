import { MarvelCharacter, MarvelData } from '~/services/model/characters'
import { fetchApi } from '~/services/apis/apiWrapper'

export const getMarvelCharacters = async (offset = 0, limit = 10): Promise<MarvelData> => {
  const response = await fetchApi(`/characters?offset=${offset}&limit=${limit}`)
  return response.data
}

export const getCharacterDetails = async (characterId: number): Promise<MarvelCharacter> => {
  const response = await fetchApi(`/characters/${characterId}?`)
  return response.data.results[0]
}

export const getCharacterComics = async (characterId: number): Promise<Comics[]> => {
  const response = await fetchApi(`/characters/${characterId}/comics?`)
  return response.data.results
}

export const getCharacterSeries = async (characterId: number): Promise<Series[]> => {
  const response = await fetchApi(`/characters/${characterId}/series?`)
  return response.data.results
}

export const searchCharacterByName = async (name: string): Promise<MarvelCharacter[]> => {
  const response = await fetchApi(`/characters?nameStartsWith=${name}`)
  return response.data.results
}
