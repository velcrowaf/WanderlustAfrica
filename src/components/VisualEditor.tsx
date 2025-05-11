import { useEffect } from 'react'
import type { HistoryAdapterNavigate } from '@sanity/preview-kit'
import { client } from '../lib/sanity'

export function VisualEditing() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Only load visual editing component in development
    if (process.env.NODE_ENV === 'development') {
      import('@sanity/visual-editing/browser').then(({ defineVisualEditing }) => {
        const visualEditing = defineVisualEditing({
          projectId: 'a4oqu4lc',
          dataset: 'production',
          documentTypes: ['page', 'destination'],
          navigate: (navigate: HistoryAdapterNavigate) => {
            return ({ path, token }) => {
              if (path) {
                navigate(path)
              }
            }
          }
        })
        visualEditing.mount()
      })
    }
  }, [])

  return null
}

export default VisualEditing