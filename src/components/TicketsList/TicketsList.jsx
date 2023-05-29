import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Ticket from '../Ticket/index.js'
import classes from '../TicketsList/TicketsList.module.scss'
import { getSearchId, getTickets } from '../../actions/actions.js'
import ShowMoreButton from '../ShowMoreButton/index.js'

const defaultChunkLength = 5

const TicketsList = ({ tickets, stop, searchId, getSearchId, getTickets, activeFilters, activeSortTab }) => {
  useEffect(() => {
    getSearchId()
  }, [])
  useEffect(() => {
    if (searchId && !stop) {
      getTickets(searchId)
    }
  }, [searchId, tickets])
  const [chunkLength, setChunkLength] = useState(defaultChunkLength)
  const filter = () => {
    let asd = tickets ? tickets : null
    let result = asd ? [...asd] : []
    let none = []
    let one = []
    let two = []
    let three = []
    if (activeFilters.some((filterName) => filterName === 'ALL')) {
      switch (activeSortTab) {
        case 'SORT_FASTEST':
          result.sort((a, b) => {
            if (a.segments[0].duration + a.segments[1].duration < b.segments[0].duration + b.segments[1].duration) {
              return -1
            }
            if (a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration) {
              return 1
            }
            return 0
          })
          return result
        case 'SORT_CHEAPEST':
          result.sort((a, b) => {
            if (a.price < b.price) {
              return -1
            }
            if (a.price > b.price) {
              return 1
            }
            return 0
          })
          return result
      }
    } else if (!activeFilters.length) {
      return null
    }
    if (result.length) {
      if (activeFilters.some((filterName) => filterName === 'NONE')) {
        none = [
          ...asd.filter((ticket) => {
            if (!ticket.segments[0].stops.length && !ticket.segments[1].stops.length) {
              return ticket
            }
          }),
        ]
      }
      if (activeFilters.some((filterName) => filterName === '1')) {
        one = [
          ...asd.filter((ticket) => {
            if (ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1) {
              return ticket
            }
          }),
        ]
      }
      if (activeFilters.some((filterName) => filterName === '2')) {
        two = [
          ...asd.filter((ticket) => {
            if (ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2) {
              return ticket
            }
          }),
        ]
      }
      if (activeFilters.some((filterName) => filterName === '3')) {
        three = [
          ...asd.filter((ticket) => {
            if (ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3) {
              return ticket
            }
          }),
        ]
      }
      result = [...none, ...one, ...two, ...three]
      if (result.length) {
        switch (activeSortTab) {
          case 'SORT_FASTEST':
            result.sort((a, b) => {
              if (a.segments[0].duration + a.segments[1].duration < b.segments[0].duration + b.segments[1].duration) {
                return -1
              }
              if (a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration) {
                return 1
              }
              return 0
            })
            return result
          case 'SORT_CHEAPEST':
            result.sort((a, b) => {
              if (a.price < b.price) {
                return -1
              }
              if (a.price > b.price) {
                return 1
              }
              return 0
            })
            return result
        }
      }
    }
  }
  const showTickets = (tickets, ticketsPortion = defaultChunkLength) => {
    if (tickets) {
      return tickets.slice(0, ticketsPortion).map((ticket) => <Ticket key={ticket.id} ticket={ticket} />)
    } else {
      return <li className={classes['not-found-text']}>Не найдено билетов по выбранным фильтрам</li>
    }
  }
  const onShowMoreButtonClick = () => {
    setChunkLength((chunkLength) => chunkLength + defaultChunkLength)
  }
  return (
    <div className={classes.tickets}>
      {stop ? null : (
        <div className={classes.loader}>
          <div className={classes.loading}></div>
          <p className={classes['loading-text']}>Ищем билеты...</p>
        </div>
      )}
      <ul className={classes['tickets-list']}>{showTickets(filter(), chunkLength)}</ul>
      <ShowMoreButton onShowMoreButtonClick={onShowMoreButtonClick} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tickets: state.data.tickets,
    stop: state.data.stop,
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
