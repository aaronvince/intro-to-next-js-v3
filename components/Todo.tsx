type TodoType = {
  id: string
  createdAt: Date
  content: string | null
  completed: boolean
}

const Todo = ({ todo }: { todo: TodoType }) => {
  return <div>{todo.content}</div>
}

export default Todo
