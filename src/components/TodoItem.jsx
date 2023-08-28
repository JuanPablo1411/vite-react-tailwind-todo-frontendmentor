import CrossIcon from "../components/icons/CrossIcon";
import CheckIcon from "./icons/CheckIcon";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="flex gap-4 border-b dark:bg-gray-800">
      <button
        className={` h-5 w-5 flex-none rounded-full  ${
          completed
            ? "bg-gradient-to-r border-0 from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center "
            : "inline-block border-2"
        }`}
        onClick={() => updateTodo(id)}
      >
        {completed && <CheckIcon />}
      </button>
      <p className={`text-gray-600 grow dark:text-gray-400 ${completed && "line-through"}`}>
        {title}
      </p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
