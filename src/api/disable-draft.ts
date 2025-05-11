export const config = {
  runtime: 'edge',
}

export default async function handler() {
  // Disable Draft Mode by removing the cookies
  const response = new Response(null, {
    status: 307,
    headers: { 'Location': '/' },
  })

  response.cookies.delete('__prerender_bypass')
  response.cookies.delete('__next_preview_data')

  return response
}