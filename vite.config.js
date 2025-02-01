import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./estate-app/",
  server: {
    "/api": {
      target:
        "http://api.geonames.org/childrenJSON?geonameId=2328926&username=softwareeasy",
      changeOrigin: true,
      secure: false,
    },
  },
});
