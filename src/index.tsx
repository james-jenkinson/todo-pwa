import React from 'react'
import reactDom from 'react-dom'
import App from './App'
import { register } from './registerServiceWorker'

register()

reactDom.hydrate(
  <App />,
  document.getElementById('app-container')
)
