import { createTheme } from '@mui/material/styles'

export const themeOption = createTheme({
  breakpoints: {
    values: {
      mobile: 425
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#006874'
    },
    secondary: {
      main: '#4A6267'
    }
  },
  typography: {
    titleLarge: {
      fontFamily: 'Roboto',
      fontSize: '22px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '28px' /* 127.273% */
    }
  }
})
