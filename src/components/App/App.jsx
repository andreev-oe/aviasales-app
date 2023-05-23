import React from 'react'

import logo from '../../icons/logo.png'
import companyLogo from '../../icons/S7-logo.png'

import classes from './App.module.scss'

function App() {
  return (
    <div className={classes['page-wrapper']}>
      <img className={classes.logo} src={logo} alt="aviasales logo" />
      <div className={classes['content-wrapper']}>
        <section className={classes.transfers}>
          <h2 className={classes['transfers-title']}>Количество пересадок</h2>
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
        </section>
        <section className={classes['tickets-wrapper']}>
          <div className={classes.filters}>
            <button
              type={'button'}
              className={`${classes.button} ${classes['button-active']} ${classes['button-cheap']}`}
            >
              Самый дешёвый
            </button>
            <button type={'button'} className={`${classes.button} ${classes['button-fast']}`}>
              Самый быстрый
            </button>
          </div>
          <div className={classes.tickets}>
            <ul className={classes['tickets-list']}>
              <li className={classes.ticket}>
                <div className={classes.header}>
                  <p className={classes.price}>13 400 Р </p>
                  <img className={classes['company-logo']} src={companyLogo} alt="aviasales logo" />
                </div>
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
              </li>
              <li className={classes.ticket}>
                <div className={classes.header}>
                  <p className={classes.price}>13 400 Р </p>
                  <img className={classes['company-logo']} src={companyLogo} alt="aviasales logo" />
                </div>
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
              </li>
              <li className={classes.ticket}>
                <div className={classes.header}>
                  <p className={classes.price}>13 400 Р </p>
                  <img className={classes['company-logo']} src={companyLogo} alt="aviasales logo" />
                </div>
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
              </li>
              <li className={classes.ticket}>
                <div className={classes.header}>
                  <p className={classes.price}>13 400 Р </p>
                  <img className={classes['company-logo']} src={companyLogo} alt="aviasales logo" />
                </div>
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
              </li>
              <li className={classes.ticket}>
                <div className={classes.header}>
                  <p className={classes.price}>13 400 Р </p>
                  <img className={classes['company-logo']} src={companyLogo} alt="aviasales logo" />
                </div>
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
              </li>
            </ul>
          </div>
          <button type={'button'} className={classes['show-more']}>
            Показать еще 5 билетов!
          </button>
        </section>
      </div>
    </div>
  )
}

export default App
