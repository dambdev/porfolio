import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://damb.dev',

  trailingSlash: 'always',

  integrations: [
    react(),
    robotsTxt({
      host: 'https://damb.dev',
      policy: [
        {
          userAgent: '*',
          allow: '/'
        }
      ]
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
})
