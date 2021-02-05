import React, { useContext } from 'react'
import todoContainerContext from '../TodoContainer/todoContainerContext'
import TodoDisplayMode from './Todo.DisplayMode'
import TodoEditMode from './Todo.EditMode'
import './todo.css'

interface Props {
  id: string
}

const Todo: React.FC<Props> = (props) => {
  const { currentlyEditing } = useContext(todoContainerContext)

  const isEditing = props.id === currentlyEditing

  return (
    <div className={props.id}>
      {isEditing
        ? <TodoEditMode id={props.id} />
        : <TodoDisplayMode id={props.id} />}
    </div>
  )
}

export default Todo
