import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { env, isDevelopment } from './env'

const projectId = env.VITE_SANITY_PROJECT_ID
const dataset = env.VITE_SANITY_DATASET
const apiVersion = env.VITE_SANITY_API_VERSION

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
  stega: {
    enabled: isDevelopment,
    studioUrl: '/studio',
  },
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: unknown) => {
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
    token: env.VITE_SANITY_TOKEN,
  })
}