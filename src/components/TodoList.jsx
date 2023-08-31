import TodoItem from "./TodoItem";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <Droppable droppableId="todos">
      {(droppableProvider) => (
        <div
          ref={droppableProvider.innerRef}
          {...droppableProvider.droppableProps}
          className="bg-white rounded-t-md overflow-hidden transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4 mt-8"
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
              {(draggableProvided) => (
                <TodoItem
                  todo={todo}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.dragHandleProps}
                  {...draggableProvided.draggableProps}
                />
              )}
            </Draggable>
          ))}

          {droppableProvider.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;
