import React, { useContext, useState } from 'react'
import { todoContext } from '../../data/TodoContext'
import { Todo } from '../../types/todo'

const AddTodo: React.FC = () => {
  const { addTodo } = useContext(todoContext)
  const [text, setText] = useState('')

  const createNewTodo = (e: React.FormEvent): void => {
    e.preventDefault()

    const newTodo: Todo = {
      id: Date.now().toString(),
      state: 'not-done',
      text: text
    }
    setText('')
    addTodo(newTodo)
  }

  return (
    <form onSubmit={createNewTodo}>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button
        type='submit'
      >
        Add todo
      </button>
    </form>
  )
}

export default AddTodo
