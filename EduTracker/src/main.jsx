import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { themeOption } from './utils/theme.js'
import { ThemeProvider } from '@mui/material/styles'
import { AppProvider } from './context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline>
      <ThemeProvider theme={themeOption}>
        <AppProvider>
          <App />
        </AppProvider>
      </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>
)
