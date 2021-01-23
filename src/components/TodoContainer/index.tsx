import React, { useContext } from 'react'
import { todoContext } from '../../data/TodoContext'
import AddTodo from '../AddTodo'
import Todo from '../Todo'

const TodoContainer: React.FC = () => {
  const { todos } = useContext(todoContext)

  return (
    <>
      <AddTodo />
      {todos.map(todo => (
        <Todo
          key={todo.id}
          text={todo.text}
          status={todo.state}
        />
      ))}
    </>
  )
}

export default TodoContainer
