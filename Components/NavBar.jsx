import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow:1}}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2}}
                    >
                        <MenuIcon></MenuIcon>
                </IconButton>
                <Typography variant="h6" components="div" sx={{ flexGrow: 1 }}>
                    Edu Tool Port
                </Typography>
                <Button color="inherit">
                    <Link to={'/'} style={{color:'white'}}>HOME</Link>
                </Button>
                <Button>
                    <Link to={'/c'} style={{color:'white'}}>Login</Link>
                </Button>
                <Button>
                    <Link to={'/d'} style={{color:'white'}}>ItemImages</Link>
                </Button>
                <Button>
                    <Link to={'/s'} style={{color:'white'}}>ItemPurchase</Link>
                </Button>
                 <Button>
                    <Link to={'/f'} style={{color:'white'}}>Address</Link>
                </Button>
                <Button>
                    <Link to={'/e'} style={{color:'white'}}>Payment</Link>
                </Button>
            </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar