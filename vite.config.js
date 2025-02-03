import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./estate-app/",
  server: {
    "/api": {
      target: "https://naija-places.toneflix.com.ng/api/v1/states",
      changeOrigin: true,
      secure: false,
    },
  },
});
