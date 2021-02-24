import React, { useState, useEffect } from 'react'
import { Products, Navbar, Cart } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { commerce } from './lib/commerce'

const App = () => {
  // product state
  const [products, setProducts] = useState([])

  // cart state
  const [cart, setCart] = useState({})

  // create fetchProducts fun
  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  // create fetch Cart fun
  const fetchCart = async () => {
    // const cart=await commerce.cart.retrieve()
    // setCart(cart)
    // or can do that
    setCart(await commerce.cart.retrieve())
  }

  // handleAddTocart fun
  const handleToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }

  // hnadle update cart
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity })
    setCart(cart)
  }

  // handleRemove form cart
  const handleRemoveCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId)
    setCart(cart)
  }

  // handle empty cart
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty()

    setCart(cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])
  // console.log(products);
  console.log(cart)
  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path='/'>
            <Products products={products} onAddToCart={handleToCart} />
          </Route>
          <Route path='/card'>
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveCart={handleRemoveCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
