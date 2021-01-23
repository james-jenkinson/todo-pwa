import React from 'react'
import TodoContainer from '../components/TodoContainer'
import { TodoContextProvider } from '../data/TodoContext'
import './App.css'

const App: React.FC = () => (
  <div className='application-root'>
    <TodoContextProvider>
      <TodoContainer />
    </TodoContextProvider>
  </div>
)

export default App
