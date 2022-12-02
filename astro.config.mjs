import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'
import addClasses from 'rehype-add-classes'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.xaviercastro.dev',
  integrations: [
    sitemap(),
    react(),
    image({ serviceEntryPoint: '@astrojs/image/sharp' }),
    tailwind()
  ],
  markdown: {
    extendedDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-4xl'
        }
      ]
    ]
  }
})
