import React, { createContext, useCallback, useEffect, useMemo } from 'react'
import { Todo, TodoStatus } from '../types/todo'
import { todoReducer } from './todoReducer'
import { todoTable } from './todoDatabase'

interface TodoContext {
  todos: Todo[]
  addTodo: (todo: Todo) => void
  editTodo: (todoId: string, payload: Partial<Todo>) => void
  selectTodo: (todoId: string) => Todo
  deleteTodo: (todoId: string) => void
  setTodoStatus: (id: string, status: TodoStatus) => void
}

export const todoContext = createContext<TodoContext>({
  todos: [],
  addTodo: () => {},
  editTodo: () => {},
  selectTodo: (id) => ({ id, state: 'not-done', text: '' }),
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

  const editTodo = useCallback(async (todoId: string, payload: Partial<Todo>) => {
    dispatch({ type: 'EDIT_TODO', payload: { id: todoId, data: payload } })
    await todoTable.where({ id: todoId }).modify(payload)
  }, [])

  const selectTodo = useCallback((todoId) => {
    return todoState.byId[todoId].data
  }, [todoState])

  const setTodoStatus = useCallback(async (todoId: string, status: TodoStatus) => {
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
        editTodo,
        selectTodo,
        setTodoStatus
      }}
    >
      {props.children}
    </todoContext.Provider>
  )
}
