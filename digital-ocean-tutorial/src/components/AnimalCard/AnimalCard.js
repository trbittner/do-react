import React from 'react'
import PropTypes from 'prop-types'
import './AnimalCard.css'

import AnimalDetails from '../AnimalDetails/AnimalDetails'
import Card from '../Card/Card'

export default function AnimalCard({
  name,
  additional,
  showAdditional,
  size,
  ...props}) {
  return (
    <Card title="Animal" details={<AnimalDetails {...props}/>}>
      <h3>{name}</h3>
      <h4>{size} kg</h4>
      <button onClick={() => showAdditional(additional)}>More Info</button>
    </Card>
  )
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  }),
  name: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired
}

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information'
  }
}
