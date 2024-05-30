import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { themeOption } from './utils/theme.js'
import { ThemeProvider } from '@mui/material/styles'
import { AppProvider } from './context/AppContext.jsx'
import { UIProvider } from './context/UIContext.jsx'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline>
      <AppProvider>
        <UIProvider>
          <ThemeProvider theme={themeOption}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <App />
            </LocalizationProvider>
          </ThemeProvider>
        </UIProvider>
      </AppProvider>
    </CssBaseline>
  </React.StrictMode>
)
