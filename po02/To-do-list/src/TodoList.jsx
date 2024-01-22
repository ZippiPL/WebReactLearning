import { TodoItem } from "./Todoitem"

export function Todolist( {todos , toggleTodo,deleteTodo}){
    return (
        <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo=>{
            return  <TodoItem 
                {...todo} 
                key={todo.id}
                toggleTodo={toggleTodo}
                delete={deleteTodo}
                />
        })}
  </ul>
  )
}