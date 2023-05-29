import React from 'react'

import Route from '../Route/index.js'
import classes from '../Ticket/Ticket.module.scss'

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket
  const formatPrice = (price) => {
    const formattedPrice = price.toString().split('').reverse()
    formattedPrice.splice(3, 0, ' ')
    return formattedPrice.reverse().join('')
  }
  return (
    <li className={classes.ticket}>
      <div className={classes.header}>
        <p className={classes.price}>{formatPrice(price)} Р </p>
        <img className={classes['company-logo']} src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
      </div>
      {segments.map((segment, index) => {
        return <Route key={index} segment={segment} />
      })}
    </li>
  )
}

export default Ticket
