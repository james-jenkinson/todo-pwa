import { useReducer } from 'react'
import { Reducer } from '../types/state'
import { Todo } from '../types/todo'

interface ReducerState {
  todos: Todo[]
}

const initialState: ReducerState = {
  todos: []
}

type ReducerAction =
  { type: 'FETCH_TODOS_SUCCESS', payload: Todo[] } |
  { type: 'ADD_TODO', payload: Todo }

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] }

    case 'FETCH_TODOS_SUCCESS':
      return { ...state, todos: action.payload }

    default:
      return state
  }
}

export const todoReducer: Reducer<ReducerState, ReducerAction> = () =>
  useReducer(reducer, initialState)
