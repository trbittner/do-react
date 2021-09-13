import React from 'react'
import {createUseStyles} from 'react-jss'

import Alert from '../Alert/Alert'
import CartSucess from '../CartSuccess/CartSuccess'

const useStyles = createUseStyles({
  wrapper: {
    padding: 20
  }
})

function Style() {
  const classes = useStyles()
  return (
      <div className={classes.wrapper}>
        <Alert title="Items Not Added" type="error">
         <div>Your items are out of stock.</div>
        </Alert>
        <CartSucess />
      </div>
    )
}

export default Style
