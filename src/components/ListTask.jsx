import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
const ListTask = () => {
  const todos = useSelector((state) => state.taskReducer.todos);
  const filteredTodos = useSelector((state) => state.taskReducer.filteredTodos);
  if (filteredTodos.length > 0) {
    return (
      <ul>
        {filteredTodos.map((todo) => (
          <Task key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
  return (
    <ul>
      {todos.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ListTask;
