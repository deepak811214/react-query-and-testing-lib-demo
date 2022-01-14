import { useQuery } from 'react-query'
import axios from 'axios'
import { BASE_URL, SEARCH_URL, API_KEY } from '../utils/constants'

const fetch = (mediaType, queryParams, searchText) => {
  const payload = {
    params: {
      api_key: API_KEY,
      language: "en-US",
    }
  }
  if (searchText) {
    payload.params = { ...payload.params, query: searchText }
    return axios.get(`${SEARCH_URL}`, payload).then((res) => res.data)
  } else {
    payload.params = { ...payload.params, ...queryParams }
    return axios.get(`${BASE_URL}${mediaType}/`, payload).then((res) => res.data)
  }
}

export default function useGetData(mediaType, queryParams, searchText) {
  return useQuery(searchText || [mediaType, queryParams], () => fetch(mediaType, queryParams, searchText))
}