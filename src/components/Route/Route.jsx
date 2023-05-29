import React from 'react'
import { add, format } from 'date-fns'

import classes from '../Route/Route.module.scss'
import {
  MINUTES_IN_HOUR,
  SECONDS_IN_MINUTE,
  MIN_STOPS_LENGTH,
  MIN_LEFT_PAD_NUMBER,
  TIME_FORMAT,
  NO_STOPS_TEXT,
} from '../../constants/constants.js'

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
            {stops.length ? stops.length : null} {stops.length === MIN_STOPS_LENGTH ? 'пересадка' : 'пересадки'}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={classes.td}>
            {format(new Date(date), TIME_FORMAT).toString()} -{' '}
            {format(
              add(new Date(date), {
                minutes: duration,
              }),
              TIME_FORMAT
            ).toString()}
          </td>
          <td className={classes.td}>
            {Math.floor(
              duration / MINUTES_IN_HOUR < MIN_LEFT_PAD_NUMBER
                ? `0${duration / MINUTES_IN_HOUR}`
                : duration / MINUTES_IN_HOUR
            )}
            ч{' '}
            {duration % SECONDS_IN_MINUTE < MIN_LEFT_PAD_NUMBER
              ? `0${duration % SECONDS_IN_MINUTE}`
              : duration % SECONDS_IN_MINUTE}
            м
          </td>
          <td className={classes.td}>
            {stops.length ? stops.map((stop) => (stop !== undefined ? stop : null)).join(', ') : NO_STOPS_TEXT}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Route
