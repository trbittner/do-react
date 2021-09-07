import React from 'react'
import './Style.css'

import Alert from '../Alert/Alert'
import CartSucess from '../CartSuccess/CartSuccess'

function Style() {
  return (
      <div className="wrapper">
        <Alert title="Items Not Added" type="error">
         <div>Your items are out of stock.</div>
        </Alert>
        <CartSucess />
      </div>
    )
}

export default Style
