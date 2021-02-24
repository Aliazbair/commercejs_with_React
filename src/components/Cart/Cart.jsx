import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import CartItems from './CartItem/CartItems'
import useStyles from './styles'
import { Link } from 'react-router-dom'
const Cart = ({cart,handleUpdateCartQty,handleRemoveCart,handleEmptyCart}) => {
    const classes=useStyles()
 
  console.log(cart.line_items);

  // create EmptyCart component
  const EmptyCart = () => (
    <Typography variant='subtitle1'>
      you have no items in your shopping cart😥<Link to="/" className={classes.link}> start adding some🥰🥰</Link>
    </Typography>
  )

  // create filledCART COMPONENT
  const FilledCart = () => (
      <>
       <Grid container spacing={3}>
           {cart.line_items.map(item=>(
               <Grid item xs={12} sm={4} key={item.id}>
                   <CartItems item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveCart={handleRemoveCart} />
               </Grid>
           ))} 
           </Grid>
           <div className={classes.cardDetails}>
               <Typography variant="h4">Subtotal:{cart.subtotal.formatted_with_symbol}</Typography>
               <div>
                   <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart🙂</Button>
                   <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">CheckOut🤑</Button>
               </div>
           </div>
      </>
  )

//   check the cart items
if(!cart.line_items) return 'loading'
  return (
    <Container >
      <div className={classes.toolbar}>
        <Typography variant='h5' className={classes.title} gutterBottom>Your Shoping cart</Typography>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </div>
    </Container>
  )
}

export default Cart
