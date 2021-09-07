import React from 'react'
import './Style.css'

import Alert from '../Alert/Alert'

function Style() {
  return (
      <div className="wrapper">
        <Alert title="Items Not Added" type="error">
         <div>Your items are out of stock.</div>
        </Alert>
      </div>
    )
}

export default Style
