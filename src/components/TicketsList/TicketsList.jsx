import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Ticket from '../Ticket/index.js'
import classes from '../TicketsList/TicketsList.module.scss'
import { getTickets } from '../../actions/actions.js'

const TicketsList = ({ getTickets }) => {
  return (
    <div className={classes.tickets}>
      <button onClick={getTickets}>getTickets</button>
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
