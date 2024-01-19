import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: 'https://github.com/RinaKovri/bookstore.git', 
  test: {
    globals: true,
    environment: 'jsdom',
  } 
})
