import React, { useState, useContext, useEffect, useRef } from "react";
import TodoItem from "./TodoItem";
import TodoService from "./../services/TodoService";
import { AuthContext } from "./../context/AuthContext";
import Message from "./Message";

const Todo = (props) => {
  const [todo, setTodo] = useState({ name: "" });
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    TodoService.getTodos().then((data) => {
      //   console.log(data["todos"]);
      setTodos(data["todos"]);
    });
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    TodoService.postTodo(todo).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        TodoService.getTodos().then((getData) => {
          setTodos(getData.todos);
          setMessage(message);
        });
      }
      //client token expired
      else if (message.msgBody === "unAuthrozied") {
        setMessage(message);
        //update global state incase token expires
        authContext.setUser({ username: "", role: "" });
        authContext.setIsAuthenticated(false);
      }
      //error condition handled here
      else {
        setMessage(message);
      }
    });
  };
  const onChange = (e) => {
    setTodo({ name: e.target.value });
  };

  const resetForm = () => {
    setTodo({ name: "" });
  };
  return (
    <div>
      <ul className="list-group">
        {todos.map((todo) => {
          return <TodoItem key={todo._id} todo={todo} />;
        })}
      </ul>

      <form onSubmit={onSubmit}>
        <label htmlFor="todo">Enter Todo</label>
        <input
          type="text"
          className="form-control"
          onChange={onChange}
          value={todo.name}
          name="name"
          required
        />
        <button type="submit" className="btn btn-lg btn-success"></button>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  );
};
export default Todo;
