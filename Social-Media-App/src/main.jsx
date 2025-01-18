import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import { store } from './Store/Store.js'
import {Provider} from 'react-redux'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>,
  </Provider>
)
