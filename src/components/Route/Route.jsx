import React from 'react'
import { add, format } from 'date-fns'

import classes from '../Route/Route.module.scss'

const Route = ({ segment: { origin, destination, date, duration, stops } }) => {
  return (
    <table className={classes.table}>
      <thead className={classes.thead}>
        <tr>
          <th className={classes.th}>
            {origin} – {destination}
          </th>
          <th className={classes.th}>В пути</th>
          <th className={classes.th}>
            {stops.length ? stops.length : null} {stops.length === 1 ? 'пересадка' : 'пересадки'}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={classes.td}>
            {format(new Date(date), 'kk:mm').toString()} -{' '}
            {format(
              add(new Date(date), {
                minutes: duration,
              }),
              'kk:mm'
            ).toString()}
          </td>
          <td className={classes.td}>
            {Math.floor(duration / 60 < 10 ? `0${duration / 60}` : duration / 60)}ч{' '}
            {duration % 60 < 10 ? `0${duration % 60}` : duration % 60}м
          </td>
          <td className={classes.td}>
            {stops.length ? stops.map((stop) => (stop !== undefined ? stop : null)).join(', ') : 'Нет'}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Route
