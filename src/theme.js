import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

import { THEME_FONTS } from '../template.settings'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: THEME_FONTS.join(', ')
  }
})

theme.typography.h1 = {
  fontSize: '3rem',
  '@media (min-width:600px)': {
    fontSize: '4.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '6rem',
  },
}

theme.typography.h5 = {
  fontSize: '.8rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
}

export default theme
