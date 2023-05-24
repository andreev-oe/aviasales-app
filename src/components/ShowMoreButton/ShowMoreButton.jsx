import React from 'react'

import classes from '../App/App.module.scss'

const ShowMoreButton = () => {
  return (
    <button type={'button'} className={classes['show-more']}>
      Показать еще 5 билетов!
    </button>
  )
}

export default ShowMoreButton
