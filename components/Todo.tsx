'use client'

import { completeTodo } from '@/utils/actions'
import { useTransition } from 'react'

type TodoType = {
  id: string
  createdAt: Date
  content: string | null
  completed: boolean
}

const Todo = ({ todo }: { todo: TodoType }) => {
  const [isPending, startTransition] = useTransition()
  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        todo.completed ? `line-through text-gray-900` : ''
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  )
}

export default Todo
