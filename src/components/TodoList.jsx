import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <div className="bg-white rounded-t-md overflow-hidden transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4 mt-8">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
      {/* <TodoItem></TodoItem> */}
    </div>
  );
};

export default TodoList;
