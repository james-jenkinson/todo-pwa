import { createContext } from 'react'

interface TodoContainerContext {
  currentlyEditing: string | undefined
  startEditing: (todoId: string) => void
  stopEditing: () => void
}

const todoContainerContext = createContext<TodoContainerContext>({
  currentlyEditing: undefined,
  startEditing: () => {},
  stopEditing: () => {}
})

export default todoContainerContext
