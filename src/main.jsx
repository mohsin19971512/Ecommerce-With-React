import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import {BrowserRouter} from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
