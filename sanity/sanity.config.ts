import React from 'react'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {presentationTool} from '@sanity/presentation'
import {schemaTypes} from './schemaTypes'
import './styles/main.css'

const devOnlyPlugins = [presentationTool()]

export default defineConfig({
  name: 'default',
  title: 'WanderlustAfrica',
  basePath: '/',
  projectId: 'a4oqu4lc',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    ...(process.env.NODE_ENV === 'development' ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    // For the preview functionality to work, we need to tell Sanity about our document actions
    actions: (prev, { schemaType }) => {
      // Only show preview option for document types `page` and `destination`
      if (schemaType === 'page' || schemaType === 'destination') {
        return prev
      }
      return prev.filter(({ action }) => action !== 'publish')
    },
  },
})
