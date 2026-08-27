import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useContext, useState, useRef } from 'react'
import { ElementosGlobales } from '../../context/ElementosGlobales'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
const pages = ['Products']

function ResponsiveAppBar() {
  const { search, setSearch } = useContext(ElementosGlobales)

  const [anchorElNav, setAnchorElNav] = useState(null)

  const [searchFocused, setSearchFocused] = useState(false)
  const inputRef = useRef(null)

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }
  const handleSearchOpen = () => {
    setSearchFocused(true)

    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* Logo escritorio */}

          <ShoppingCartIcon
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1
            }}
          />

          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.15rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            ReactCommerce
          </Typography>

          {/* Menú hamburguesa */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' }
            }}
          >
            <IconButton
              size='large'
              aria-label='menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo celular */}

          <ShoppingCartIcon
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 1
            }}
          />

          <Typography
            variant='h5'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            ReactCommerce
          </Typography>

          {/* Menú escritorio */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' }
            }}
          >
            {pages.map(page => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block'
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <TextField
            size='small'
            placeholder='Find product...'
            value={search}
            inputRef={inputRef}
            onChange={event => setSearch(event.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            sx={{
              backgroundColor: 'background.paper',
              borderRadius: 1,

              width: {
                xs: searchFocused || search ? 220 : 48,
                sm: 220,
                md: 250
              },

              transition: 'width 0.3s ease',

              '& .MuiInputBase-root': {
                height: 44
              },

              '& .MuiInputBase-input': {
                width: {
                  xs: searchFocused || search ? '100%' : 0,
                  sm: '100%'
                },
                transition: 'width 0.3s ease'
              }
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position='start'>
                    <IconButton
                      size='small'
                      onClick={handleSearchOpen}
                      edge='start'
                      aria-label='Buscar producto'
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar
