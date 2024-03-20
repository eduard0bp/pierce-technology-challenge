export const BASE_URL = 'https://65fb3f1a14650eb21009b968.mockapi.io/events'

export const fetcher = (url: string) => fetch(url).then(res => res.json())
