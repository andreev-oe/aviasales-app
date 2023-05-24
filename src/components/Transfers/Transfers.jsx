import React from 'react'

import classes from '../App/App.module.scss'

const Transfers = () => {
  return (
    <section className={classes.transfers}>
      <h2 className={classes['transfers-title']}>Количество пересадок</h2>
      <div className={classes.variants}>
        <label htmlFor="1" className={classes.transfer}>
          <input id="1" type="checkbox" className={classes.checkbox} />
          <p className={classes['transfer-title']}>Все</p>
        </label>
        <label htmlFor="2" className={classes.transfer}>
          <input id="2" type="checkbox" className={classes.checkbox} />
          <p className={classes['transfer-title']}>Без пересадок</p>
        </label>
        <label htmlFor="3" className={classes.transfer}>
          <input id="3" type="checkbox" className={classes.checkbox} />
          <p className={classes['transfer-title']}>1 пересадка</p>
        </label>
        <label htmlFor="4" className={classes.transfer}>
          <input id="4" type="checkbox" className={classes.checkbox} />
          <p className={classes['transfer-title']}>2 пересадки</p>
        </label>
        <label htmlFor="5" className={classes.transfer}>
          <input id="5" type="checkbox" className={classes.checkbox} />
          <p className={classes['transfer-title']}>3 пересадки</p>
        </label>
      </div>
    </section>
  )
}

export default Transfers
