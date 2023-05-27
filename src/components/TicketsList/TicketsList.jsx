import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Ticket from '../Ticket/index.js'
import classes from '../TicketsList/TicketsList.module.scss'
import { getTickets } from '../../actions/actions.js'

const TicketsList = ({ tickets, getTickets, activeFilters, activeSortTab }) => {
  useEffect(() => {
    getTickets()
  }, [])
  const filter = () => {
    if (activeFilters.some((filterName) => filterName === 'ALL')) {
      const asd = tickets.tickets ? tickets.tickets : null
      if (asd) {
        switch (activeSortTab) {
          case 'SORT_FASTEST':
            asd.sort((a, b) => {
              if (a.segments[0].duration + a.segments[1].duration < b.segments[0].duration + b.segments[1].duration) {
                return -1
              }
              if (a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration) {
                return 1
              }
              return 0
            })
            return asd.map((ticket, index) => <Ticket key={index} ticket={ticket} />)
          case 'SORT_CHEAPEST':
            asd.sort((a, b) => {
              if (a.price < b.price) {
                return -1
              }
              if (a.price > b.price) {
                return 1
              }
              return 0
            })
            return asd.map((ticket, index) => <Ticket key={index} ticket={ticket} />)
        }
      }
    } else if (!activeFilters.length) {
      return null
    }
  }
  return (
    <div className={classes.tickets}>
      <ul className={classes['tickets-list']}>{filter()}</ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    activeFilters: state.activeFilters,
    activeSortTab: state.activeSortTab,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getTickets: bindActionCreators(getTickets, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList)
