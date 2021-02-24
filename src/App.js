import React, { useState, useEffect } from 'react'
import { Products, Navbar } from './components'
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

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])
  // console.log(products);
  console.log(cart)
  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handleToCart} />
    </div>
  )
}

export default App
