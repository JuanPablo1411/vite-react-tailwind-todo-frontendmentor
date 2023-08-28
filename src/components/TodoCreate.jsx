import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();

    if (title.trim().length > 0) {
      createTodo(title);
      return setTitle("");
    }

    setTitle("");
    // console.log(title);
  };

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="transition-all duration-1000 dark:bg-gray-800 bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4"
      action=""
    >
      <span className="rounded-full border-2 inline-block h-5 w-5"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        className=" transition-all duration-1000 dark:bg-gray-800 w-full text-gray-400 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
