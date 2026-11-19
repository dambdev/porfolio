import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// robots.txt es estático en public/: astro-robots-txt (1.0.0, la última) traía
// zod 3 sin parche de seguridad y no funciona con zod 4.
export default defineConfig({
  site: 'https://damb.dev',

  trailingSlash: 'always',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
})
