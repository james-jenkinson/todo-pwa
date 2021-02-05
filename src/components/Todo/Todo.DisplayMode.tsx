import React, { useContext } from 'react'
import { todoContext } from '../../data/TodoContext'
import todoContainerContext from '../TodoContainer/todoContainerContext'

interface Props {
  id: string
}

const TodoDisplayMode: React.FC<Props> = (props) => {
  const { selectTodo, setTodoStatus, deleteTodo } = useContext(todoContext)
  const todo = selectTodo(props.id)
  const { startEditing } = useContext(todoContainerContext)

  console.log('todo display mode', props.id)

  return (
    <>
      <button
        className={`todo-button${todo.state === 'done' ? ' todo-button--done' : ''}`}
        onClick={() =>
          setTodoStatus(props.id, todo.state === 'done' ? 'not-done' : 'done')}
      >
        {todo.text}
      </button>
      <button
        onClick={() =>
          deleteTodo(props.id)}
      >
        x
      </button>
      <button
        onClick={() => startEditing(props.id)}
      >
        edit
      </button>
    </>
  )
}

export default TodoDisplayMode
