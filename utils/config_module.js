import '@material/web/all.js'
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js'
import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme
} from '@material/material-color-utilities'

document.adoptedStyleSheets.push(typescaleStyles.styleSheet)

// Get the theme from a hex color
const theme = themeFromSourceColor(argbFromHex('#82D3E0'))

// Print out the theme as JSON
console.log(JSON.stringify(theme, null, 2))

// Check if the user has dark mode turned on
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

// Apply the theme to the body by updating custom properties for material tokens
applyTheme(theme, { target: document.body, dark: systemDark })
