import React from 'react'
import { TodoStatus } from '../../types/todo'

interface Props {
  text: string
  status: TodoStatus
}

const Todo: React.FC<Props> = (props) => {
  return (
    <div>
      {props.text}
      {props.status}
    </div>
  )
}

export default Todo
