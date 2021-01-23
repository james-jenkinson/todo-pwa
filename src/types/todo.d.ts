export interface Todo {
  id: string
  text: string
  state: TodoStatus
}

export type TodoStatus = 'done' | 'not-done'
