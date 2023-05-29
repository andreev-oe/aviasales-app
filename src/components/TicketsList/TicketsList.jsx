import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Ticket from '../Ticket/index.js'
import classes from '../TicketsList/TicketsList.module.scss'
import { getSearchId, getTickets } from '../../actions/actions.js'
import ShowMoreButton from '../ShowMoreButton/index.js'
import { defaultChunkLength } from '../../constants.js'
import { filterItems } from '../../utils.js'

const TicketsList = ({ tickets, stop, error, searchId, getSearchId, getTickets, activeFilters, activeSortTab }) => {
  useEffect(() => {
    getSearchId()
  }, [])
  useEffect(() => {
    if (searchId && !stop) {
      getTickets(searchId)
    }
  }, [searchId, tickets])
  useEffect(() => {
    setPreparedTickets(prepareTicketsList(tickets))
  }, [activeFilters, activeSortTab])
  const [chunkLength, setChunkLength] = useState(defaultChunkLength)
  const [preparedTickets, setPreparedTickets] = useState([])
  const prepareTicketsList = (tickets) => {
    if (activeFilters.length) {
      return filterItems(tickets, activeFilters, activeSortTab)
    } else {
      return null
    }
  }
  const showTickets = (tickets, ticketsPortion = defaultChunkLength) => {
    if (tickets) {
      return tickets.slice(0, ticketsPortion).map((ticket) => <Ticket key={ticket.id} ticket={ticket} />)
    } else {
      return stop ? (
        <li className={classes['not-found-text']}>Рейсов, подходящих под заданные фильтры, не найдено</li>
      ) : null
    }
  }
  const onShowMoreButtonClick = () => {
    if (preparedTickets) {
      setChunkLength((chunkLength) => chunkLength + defaultChunkLength)
    }
  }
  return (
    <div className={classes.tickets}>
      {stop ? null : (
        <div className={classes.loader}>
          <div className={classes.loading}></div>
          <p className={classes['loading-text']}>Ищем билеты...</p>
        </div>
      )}
      {error ? (
        <div className={classes.loader}>
          <p className={classes['loading-text']}>Загрузка всех билетов не удалась, попробуйте перезагрузить страницу</p>
        </div>
      ) : null}
      <ul className={classes['tickets-list']}>{showTickets(preparedTickets, chunkLength)}</ul>
      <ShowMoreButton onShowMoreButtonClick={onShowMoreButtonClick} />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    tickets: state.data.tickets,
    stop: state.data.stop,
    error: state.data.error,
    searchId: state.data.searchId,
    activeFilters: state.activeFilters,
    activeSortTab: state.activeSortTab,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getTickets: bindActionCreators(getTickets, dispatch),
    getSearchId: bindActionCreators(getSearchId, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList)
