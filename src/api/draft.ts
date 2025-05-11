
export const config = {
  runtime: 'edge',
}

export default async function handler() {
  // Enable Draft Mode by setting the cookies
  const response = new Response(null, {
    status: 307,
    headers: { 'Location': '/' },
  })

  response.cookies.set('__prerender_bypass', process.env.SANITY_API_READ_TOKEN || '', { path: '/' })
  response.cookies.set('__next_preview_data', '', { path: '/' })

  return response
}