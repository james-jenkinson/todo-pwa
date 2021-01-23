import Dexie from 'dexie'
import { Todo } from '../types/todo'

const db = new Dexie('TodoDatabase')
db.version(1).stores({
  todos: '++_id, id, text, state'
})

export const todos = db.table<Todo>('todos')
