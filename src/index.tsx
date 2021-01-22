import React from 'react'
import reactDom from 'react-dom'
import App from './App'

reactDom.hydrate(
  <App />,
  document.getElementById('app-container')
)
