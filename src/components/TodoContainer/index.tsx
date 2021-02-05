import React, { useContext, useState } from 'react'
import { todoContext } from '../../data/TodoContext'
import AddTodo from '../AddTodo'
import Todo from '../Todo'
import todoContainerContext from './todoContainerContext'

const TodoContainer: React.FC = () => {
  const { todos } = useContext(todoContext)
  const [currentlyEditing, setCurrentlyEditing] = useState<string | undefined>(undefined)

  return (
    <>
      <AddTodo />
      <todoContainerContext.Provider
        value={{
          currentlyEditing,
          startEditing: setCurrentlyEditing,
          stopEditing: () => setCurrentlyEditing(undefined)
        }}
      >
        {todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
          />
        ))}
      </todoContainerContext.Provider>
    </>
  )
}

export default TodoContainer
