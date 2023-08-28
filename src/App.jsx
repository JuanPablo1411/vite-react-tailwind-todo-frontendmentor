import { useState } from "react";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";

const initialStateTodos = [
  { id: 1, title: "Go to the gym", completed: true },
  { id: 2, title: "10 minutes meditation", completed: false },
  { id: 3, title: "Pick up groceries", completed: false },
  { id: 4, title: "Finish homework", completed: false },
  { id: 5, title: "Help cleaning the living room", completed: true },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const computedItemsLeft = () =>
    todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-gray-300 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo={createTodo} />

        <TodoList
          todos={filteredTodos()}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />

        <TodoComputed
          computedItemsLeft={computedItemsLeft()}
          clearCompleted={clearCompleted}
        />

        <TodoFilter changeFilter={changeFilter} />
      </main>
      <footer className="mt-8 text-center dark:text-gray-400">
        <p> Drag and drop to reorder list</p>
      </footer>
    </div>
  );
};

export default App;
