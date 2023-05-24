import React from 'react'

import classes from '../App/App.module.scss'

const Route = () => {
  // TODO remove duplicated route, use one route per instance
  return (
    <React.Fragment>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr>
            <th className={classes.th}>MOW – HKT</th>
            <th className={classes.th}>В пути</th>
            <th className={classes.th}>2 пересадки</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classes.td}>10:45 – 08:00</td>
            <td className={classes.td}>21ч 15м</td>
            <td className={classes.td}>HKG, JNB</td>
          </tr>
        </tbody>
      </table>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr>
            <th className={classes.th}>MOW – HKT</th>
            <th className={classes.th}>В пути</th>
            <th className={classes.th}>1 пересадка</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classes.td}>11:20 – 00:50</td>
            <td className={classes.td}>13ч 30м</td>
            <td className={classes.td}>HKG</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Route
