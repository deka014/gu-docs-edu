import * as React from 'react'
import { useRef } from 'react'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import {Link} from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline'
import MuiDrawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { Button } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
// import Grid from '@mui/material/Grid'
// import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ClickAwayListener from '@mui/base/ClickAwayListener'
import { mainListItems, secondaryListItems } from './listItems'

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'fixed',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: 'transform 0.2s',
    boxSizing: 'border-box',
    ...(!open && {
      transform: `translateX(-100%)`,
    }),
  },
}))

const mdTheme = createTheme()

const DashboardContent = (props) => {
  const [open, setOpen] = React.useState(true)
  const toggleDrawer = () => {
    // console.log(e)
    setOpen(!open)
  }
  // const [category, setCategory] = React.useState('1st Semester')

  const handleClickAway = () => {
    setOpen(false)
    console.log('pressed')
    // console.log('getting pressed')
  }

  // const handleDashboardClick = (data) => {
  //   setCategory(data)
  // }

  return (
    <>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <ClickAwayListener onClickAway={handleClickAway}>
            <AppBar position='static' open={open}>
              <Toolbar
                sx={{
                  pr: '24px', // keep right padding when drawer closed
                }}
              >
                <IconButton
                  edge='start'
                  color='inherit'
                  aria-label='open drawer'
                  onClick={toggleDrawer}
                  sx={{
                    marginRight: '36px',
                    ...(open && { display: 'none' }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  component='h1'
                  variant='h6'
                  color='inherit'
                  noWrap
                  sx={{ flexGrow: 1 }}
                >
                  <Link to="/" className = 'linkStyle'>
                  Code Junkie Notes
                  </Link>
                </Typography>
               
              </Toolbar>
            </AppBar>
          </ClickAwayListener>

          <Drawer variant='permanent' open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              Junkies United Notes
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List onClick={(e) => props.semester(e.target.textContent)}>
              {mainListItems}
            </List>
            <Divider />
            <List onClick={(e) => props.semester(e.target.textContent)}>
              {secondaryListItems}
              <Button>click me </Button>
            </List>
          </Drawer>
        </Box>
      </ThemeProvider>
    </>
  )
}

// export default function Dashboard() {
//   return <DashboardContent />;
// }

export default DashboardContent
