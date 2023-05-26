import React from 'react'

import Route from '../Route/index.js'
import classes from '../Ticket/Ticket.module.scss'
import companyLogo from '../../icons/S7-logo.png'

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket
  // TODO set carrier pics from CDN //pics.avs.io/99/36/{IATA_CODE_HERE}.png
  // TODO insert space after thousands in price
  return (
    <li className={classes.ticket}>
      <div className={classes.header}>
        <p className={classes.price}>{price} Р </p>
        <img className={classes['company-logo']} src={companyLogo} alt={carrier} />
      </div>
      {segments.map((segment, index) => {
        return <Route key={index} segment={segment} />
      })}
    </li>
  )
}

export default Ticket
