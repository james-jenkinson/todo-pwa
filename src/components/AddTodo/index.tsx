import React, { useContext } from 'react'
import { todoContext } from '../../data/TodoContext'
import { Todo } from '../../types/todo'
import Form from '../Form'
import * as yup from 'yup'

const schema = yup.object({
  text: yup.string().required('Please enter a name for the todo')
})

const AddTodo: React.FC = () => {
  const { addTodo } = useContext(todoContext)

  const createNewTodo = (payload: { text: string }): void => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      state: 'not-done',
      text: payload.text
    }
    addTodo(newTodo)
  }

  return (
    <Form onSubmit={createNewTodo} schema={schema} name='create-todo-form'>
      <Form.Input name='text' />
      <button
        type='submit'
      >
        Add todo
      </button>
    </Form>
  )
}

export default AddTodo
