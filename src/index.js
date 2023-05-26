import React from 'react'
import ReactDOM from 'react-dom/client'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import App from './components/App/index.js'
import rootReducer from './reducer/rootReducer.js'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
