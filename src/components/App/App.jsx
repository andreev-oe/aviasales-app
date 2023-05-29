import React from 'react'

import TransferFilters from '../FiltersList/index.js'
import TicketsList from '../TicketsList/index.js'
import SortTabs from '../SortTabs/index.js'
import logo from '../../icons/logo.png'

import classes from './App.module.scss'

function App() {
  return (
    <div className={classes['page-wrapper']}>
      <img className={classes.logo} src={logo} alt="aviasales logo" />
      <div className={classes['content-wrapper']}>
        <TransferFilters />
        <section className={classes['tickets-wrapper']}>
          <SortTabs />
          <TicketsList />
        </section>
      </div>
    </div>
  )
}

export default App
