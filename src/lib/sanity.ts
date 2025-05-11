import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = 'a4oqu4lc'
const dataset = 'production'
const apiVersion = '2024-04-23'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
  stega: {
    enabled: process.env.NODE_ENV === 'development',
    studioUrl: '/studio',
  },
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source)
}

// Get a preview client
export const getPreviewClient = () => {
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    perspective: 'previewDrafts',
    token: process.env.SANITY_API_READ_TOKEN,
  })
}