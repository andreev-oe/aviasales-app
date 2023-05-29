import React from 'react'

import classes from '../ShowMoreButton/ShowMoreButton.module.scss'

const ShowMoreButton = ({ onShowMoreButtonClick }) => {
  return (
    <button onClick={onShowMoreButtonClick} type={'button'} className={classes['show-more']}>
      Показать еще 5 билетов!
    </button>
  )
}

export default ShowMoreButton
