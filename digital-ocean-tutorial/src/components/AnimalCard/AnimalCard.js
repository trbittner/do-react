import React from 'react'
import PropTypes from 'prop-types'
import './AnimalCard.css'

import AnimalDetails from '../AnimalDetails/AnimalDetails'

export default function AnimalCard({
  name,
  additional,
  showAdditional,
  size,
  ...props}) {
  return (
    <div className="animal-wrapper">
      <h2>{name}</h2>
      <h4>{size} kg</h4>
      <AnimalDetails
        {...props}
      />
      <button onClick={() => showAdditional(additional)}>More Info</button>
    </div>
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
