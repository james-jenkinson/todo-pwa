import React, { useContext } from 'react'
import * as yup from 'yup'
import { todoContext } from '../../data/TodoContext'
import Form from '../Form'
import todoContainerContext from '../TodoContainer/todoContainerContext'

interface Props {
  id: string
}

const schema = yup.object({
  text: yup.string().required('Your todo needs a name')
})

const TodoEditMode: React.FC<Props> = (props) => {
  const { selectTodo, editTodo } = useContext(todoContext)
  const { stopEditing } = useContext(todoContainerContext)
  const todo = selectTodo(props.id)

  const onSubmit = (payload: { text: string }): void => {
    editTodo(props.id, payload)
    stopEditing()
  }

  return (
    <Form onSubmit={onSubmit} schema={schema} name='edit-todo-form'>
      <Form.Input name='text' defaultValue={todo.text} />
      <button type='reset' onClick={stopEditing}>Cancel</button>
      <button type='submit'>Update</button>
    </Form>
  )
}

export default TodoEditMode
