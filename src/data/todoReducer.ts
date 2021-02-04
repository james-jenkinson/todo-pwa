import { useReducer } from 'react'
import omit from 'lodash.omit'
import { Reducer } from '../types/state'
import { Todo, TodoStatus } from '../types/todo'
import { arrayToObject } from '../utils/arrayToObject'

interface ReducerState {
  todos: string[]
  byId: {
    [key: string]: {
      data: Todo
    }
  }
}

const initialState: ReducerState = {
  todos: [],
  byId: {}
}

type ReducerAction =
  { type: 'FETCH_TODOS_SUCCESS', payload: Todo[] } |
  { type: 'ADD_TODO', payload: Todo } |
  { type: 'DELETE_TODO', payload: { id: string } } |
  { type: 'UPDATE_TODO_STATUS', payload: { id: string, status: TodoStatus } }

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload.id],
        byId: { ...state.byId, [action.payload.id]: { data: action.payload } }
      }

    case 'FETCH_TODOS_SUCCESS':
      return {
        ...state,
        todos: action.payload.map(todo => todo.id),
        byId: arrayToObject(action.payload, todo => todo.id, todo => ({ data: todo }))
      }

    case 'DELETE_TODO':
      return {
        ...state,
        byId: omit(state.byId, action.payload.id),
        todos: state.todos.filter(id => id !== action.payload.id)
      }

    case 'UPDATE_TODO_STATUS':
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: {
            data: {
              ...state.byId[action.payload.id].data,
              state: action.payload.status
            }
          }
        }
      }

    default:
      return state
  }
}

export const todoReducer: Reducer<ReducerState, ReducerAction> = () =>
  useReducer(reducer, initialState)
