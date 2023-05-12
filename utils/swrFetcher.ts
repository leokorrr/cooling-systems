export const swrFetcher = (
  url: string,
  params: { method: string; body?: string } = { method: 'GET' }
) => fetch(url, params).then((res) => res.json())
