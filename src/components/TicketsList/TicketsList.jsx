import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Ticket from '../Ticket/index.js'
import classes from '../TicketsList/TicketsList.module.scss'
import { getTickets } from '../../actions/actions.js'

const TicketsList = ({ tickets, getTickets }) => {
  useEffect(() => {
    getTickets()
  }, [])
  return (
    <div className={classes.tickets}>
      <ul className={classes['tickets-list']}>
        {tickets.tickets ? tickets.tickets.map((ticket, index) => <Ticket key={index} ticket={ticket} />) : null}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getTickets: bindActionCreators(getTickets, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList)
