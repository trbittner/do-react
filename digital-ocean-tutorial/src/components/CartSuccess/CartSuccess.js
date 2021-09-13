import React from 'react'
import { createUseStyles } from 'react-jss'

import Alert from '../Alert/Alert'

const useStyles = createUseStyles({
  item: {},
  wrapper: {
    borderTop: 'black solid 1px',
    display: 'flex',
    flexWrap: 'wrap',
    '& h2': {
      width: '100%'
    },
    '& $item': {
      marginRight: 20
    }
  }
})

export default function CartSucess() {
  const styles = useStyles()

  return(
    <Alert title="Added to Cart" type="success">
      <div className={styles.wrapper}>
        <h2 className={styles.header}>
          You have added 3 items:
        </h2>
        <div className={styles.item}>
          <div>Bananas</div>
          <div>Quantity: 2</div>
        </div>
        <div className={styles.item}>
          <div>Lettuce</div>
          <div>Quantity: 1</div>
        </div>
      </div>
    </Alert>
  )
}
