import { useEffect } from 'react'
import { isDevelopment } from '../lib/env'

export function VisualEditing() {
  useEffect(() => {
    if (!isDevelopment) return
    
    // Visual editing is disabled until @sanity/visual-editing is properly installed
    console.log('Visual editing would be enabled in development with proper Sanity setup')
  }, [])

  return null
}

export default VisualEditing