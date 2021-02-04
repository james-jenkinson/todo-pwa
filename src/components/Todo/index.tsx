import React, { useContext } from 'react'
import { todoContext } from '../../data/TodoContext'
import { TodoStatus } from '../../types/todo'
import './todo.css'

interface Props {
  id: string
  text: string
  status: TodoStatus
}

const Todo: React.FC<Props> = (props) => {
  const { setTodoStatus, deleteTodo } = useContext(todoContext)

  return (
    <div>
      <button
        className={`todo-button${props.status === 'done' ? ' todo-button--done' : ''}`}
        onClick={() =>
          setTodoStatus(props.id, props.status === 'done' ? 'not-done' : 'done')}
      >
        {props.text}
      </button>
      <button
        onClick={() =>
          deleteTodo(props.id)}
      >
        x
      </button>
    </div>
  )
}

export default Todo
