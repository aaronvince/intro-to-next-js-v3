import Todo from './Todo'

type TodosType = {
    id: string;
    createdAt: Date;
    content: string | null;
    completed: boolean;
}[]

const TodoList = ({ todos }:{todos: TodosType}) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList
