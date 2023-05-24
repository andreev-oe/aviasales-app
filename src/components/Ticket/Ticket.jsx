import React from 'react'

import Route from '../Route/index.js'
import classes from '../Ticket/Ticket.module.scss'
import companyLogo from '../../icons/S7-logo.png'

const Ticket = () => {
  return (
    <li className={classes.ticket}>
      <div className={classes.header}>
        <p className={classes.price}>13 400 Р </p>
        <img className={classes['company-logo']} src={companyLogo} alt="aviasales logo" />
      </div>
      <Route />
    </li>
  )
}

export default Ticket
