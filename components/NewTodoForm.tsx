import { newTodo } from '@/utils/actions'

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input
          name="content"
          type="text"
          className="bg-slate-800 text-slate-100"
        />
        <button type="submit">Create Todo</button>
      </form>
    </div>
  )
}

export default NewTodoForm
