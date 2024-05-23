import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      '@mui/icons-material',
      '@mui/material',
      '@emotion/react',
      '@emotion/styled'
    ]
  },
  resolve: {
    alias: [
      {
        find: /^@mui\/icons-material\/(.*)/,
        replacement: '@mui/icons-material/esm/$1'
      }
    ]
  }
})
