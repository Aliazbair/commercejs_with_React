import React from 'react';
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import logo from '../../assets/commerce.png'
import {Link,useLocation} from 'react-router-dom'
import useStyles from './styles'

const Navbar = ({totalItems}) => {
    const classes=useStyles()
    const location=useLocation()
    return (
        <>
          <AppBar position="fixed" color="inherit" className={classes.appBar}>
              <Toolbar>
                  <Typography component={Link} to='/' variant="h6" color="inherit" className={classes.title}>
                      <img  src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                      Commrece.js
                  </Typography>
                  <div className={classes.grow}>
                      {location.pathname === '/' &&(
                      <div className={classes.button}>
                          {/* <Link to="/card">Go To Card</Link> */}
                          <IconButton component={Link} to='/card' aria-label="Show cart items" color="inherit">
                              <Badge badgeContent={totalItems} color="secondary">
                                  <ShoppingCart/>
                              </Badge>
                          </IconButton>
                      </div>

                      )}
                  </div>
              </Toolbar>
          </AppBar>
            
        </>
    );
}

export default Navbar;
