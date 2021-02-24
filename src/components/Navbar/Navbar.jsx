import React from 'react';
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import logo from '../../assets/commerce.png'
import useStyles from './styles'

const Navbar = () => {
    const classes=useStyles()
    return (
        <>
          <AppBar position="fixed" color="inherit" className={classes.appBar}>
              <Toolbar>
                  <Typography variant="h6" color="inherit" className={classes.title}>
                      <img  src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                      Commrece.js
                  </Typography>
                  <div className={classes.grow}>
                      <div className={classes.button}>
                          <IconButton aria-label="Show cart items" color="inherit">
                              <Badge badgeContent={2} color="secondary">
                                  <ShoppingCart/>
                              </Badge>
                          </IconButton>
                      </div>
                  </div>
              </Toolbar>
          </AppBar>
            
        </>
    );
}

export default Navbar;
