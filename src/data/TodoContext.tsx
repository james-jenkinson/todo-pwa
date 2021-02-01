import React, { createContext, useCallback, useEffect } from 'react'
import { Todo } from '../types/todo'
import { todoReducer } from './todoReducer'
import { todos } from './todoDatabase'

interface TodoContext {
  todos: Todo[]
  addTodo: (todo: Todo) => void
}

export const todoContext = createContext<TodoContext>({
  todos: [],
  addTodo: () => {}
})

export const TodoContextProvider: React.FC = (props) => {
  const [todoState, dispatch] = todoReducer()

  useEffect(() => {
    todos.toArray().then(result => {
      dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: result })
    }).catch(() => {})
  }, [])

  const addTodo = useCallback(async (todo: Todo) => {
    dispatch({ type: 'ADD_TODO', payload: todo })
    await todos.add(todo)
  }, [])

  return (
    <todoContext.Provider
      value={{
        todos: todoState.todos,
        addTodo
      }}
    >
      {props.children}
    </todoContext.Provider>
  )
}
