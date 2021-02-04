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
  const { setTodoStatus } = useContext(todoContext)

  return (
    <button
      className={`todo-button${props.status === 'done' ? ' todo-button--done' : ''}`}
      onClick={() =>
        setTodoStatus(props.id, props.status === 'done' ? 'not-done' : 'done')}
    >
      {props.text}
    </button>
  )
}

export default Todo
