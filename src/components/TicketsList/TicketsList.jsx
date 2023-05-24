import React from 'react'

import Ticket from '../Ticket/index.js'
import classes from '../TicketsList/TicketsList.module.scss'

const TicketsList = () => {
  return (
    <div className={classes.tickets}>
      <ul className={classes['tickets-list']}>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </ul>
    </div>
  )
}

export default TicketsList
