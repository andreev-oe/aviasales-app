import React from 'react'

import Transfers from '../Transfers/index.js'
import TicketsList from '../TicketsList/index.js'
import Filters from '../Filters/index.js'
import ShowMoreButton from '../ShowMoreButton/index.js'
import logo from '../../icons/logo.png'

import classes from './App.module.scss'

function App() {
  return (
    <div className={classes['page-wrapper']}>
      <img className={classes.logo} src={logo} alt="aviasales logo" />
      <div className={classes['content-wrapper']}>
        <Transfers />
        <section className={classes['tickets-wrapper']}>
          <Filters />
          <TicketsList />
          <ShowMoreButton />
        </section>
      </div>
    </div>
  )
}

export default App
