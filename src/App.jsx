import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, removeTodo } from "./features/todo/todoSlice";

function App() {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const todos = useSelector((state) => state.todos);
  // console.log(todos);

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(addToDo(input));
    setInput("");
  };

  const handDelete = (e, id) => {
    e.preventDefault();
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="Your Todos.."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={(e) => handleSumbit(e)} type="submit">
          Add Todo
        </button>
      </form>
      <div>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <p>{todo.text}</p>
              <button onClick={(e) => handDelete(e, todo.id)}>Del</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
