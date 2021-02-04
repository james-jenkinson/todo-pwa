import React, { createContext, useCallback, useEffect, useMemo } from 'react'
import { Todo, TodoStatus } from '../types/todo'
import { todoReducer } from './todoReducer'
import { todoTable } from './todoDatabase'

interface TodoContext {
  todos: Todo[]
  addTodo: (todo: Todo) => void
  deleteTodo: (todoId: string) => void
  setTodoStatus: (id: string, status: TodoStatus) => void
}

export const todoContext = createContext<TodoContext>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  setTodoStatus: () => {}
})

export const TodoContextProvider: React.FC = (props) => {
  const [todoState, dispatch] = todoReducer()

  useEffect(() => {
    todoTable.toArray().then(result => {
      dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: result })
    }).catch(() => {})
  }, [])

  const addTodo = useCallback(async (todo: Todo) => {
    dispatch({ type: 'ADD_TODO', payload: todo })
    await todoTable.add(todo)
  }, [])

  const deleteTodo = useCallback(async (todoId: string) => {
    dispatch({ type: 'DELETE_TODO', payload: { id: todoId } })
    await todoTable.where({ id: todoId }).delete()
  }, [])

  const setTodoStatus = useCallback(async (todoId: string, status: TodoStatus) => {
    console.log('set todo status', todoId, status)
    dispatch({ type: 'UPDATE_TODO_STATUS', payload: { id: todoId, status } })
    await todoTable.where({ id: todoId }).modify({ state: status })
  }, [])

  const todos = useMemo(() => todoState.todos.map(todoId => todoState.byId[todoId].data), [todoState])

  return (
    <todoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        setTodoStatus
      }}
    >
      {props.children}
    </todoContext.Provider>
  )
}
