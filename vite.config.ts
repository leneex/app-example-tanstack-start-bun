import { defineConfig } from 'vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  // Prerendering fetches pages from vite preview: an explicit 127.0.0.1 keeps the server and the requests
  // from ending up on different addresses (::1 and 127.0.0.1) in the build container
  preview: { host: '127.0.0.1' },
  plugins: [
    tanstackStart({
      // Static build: pages are prerendered to HTML in dist/client
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
    }),
    viteReact(),
  ],
})

export default config
