import React, { useReducer } from "react";

const initailValue = [
  {
    id: 1,
    title: "Todo 1",
    complete: true,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "complete":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

const Todo = () => {
  const [todos, dispatch] = useReducer(reducer, initailValue);

  const handleTodo = (todo) => {
    dispatch({ type: "complete", id: todo.id });
  };
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleTodo(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
};

export default Todo;
