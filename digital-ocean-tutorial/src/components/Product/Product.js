import React, { useState } from 'react'
import './Product.css'

const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 5
  },
  {
    emoji: '🍩',
    name: 'donuts',
    price: 2.5
  },
  {
    emoji: '🍉',
    name: 'watermelon',
    price: 4
  }
]

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}

function getTotal(total) {
  return total.toLocaleString(undefined,currencyOptions)
}

export default function Product() {
    const [cart,setCart] = useState([])
    const [total,setTotal] = useState(0)

    return (
      <div className="wrapper">
        <div>
          Shopping Cart: {cart.length} total items.
        </div>
        <div>Total: {getTotal(total)}</div>
        <div className="product"><span role="img" aria-label="ice cream">🍦</span></div>
        <button>Add</button><button>Remove</button>
      </div>
    )
}
