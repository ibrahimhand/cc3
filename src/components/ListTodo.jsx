import React from "react";
import "./ListTodo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ListTodo() {
  const { id } = useParams();
  const UserList = useSelector((state) => state.User.data);
  const TodoList = useSelector((state) => state.TodoList.data);
  const selectedUser = UserList.Users.filter((User) => User.id == id);
  const selectedTodos = TodoList.Todos.filter((Todo) => Todo.id == id);
  return (
    <div>
      <h1>
        {`${selectedUser[0].firstName.toUpperCase()} ${selectedUser[0].lastName.toUpperCase()}`}{" "}
        TO DO LIST
      </h1>
      <div className="Info">
        <table>
          <thead>
            <tr>
              <td>Description</td>
              <td>State</td>
            </tr>
          </thead>
          <tbody>
            {selectedTodos.map((Todo) => (
              <tr key={Todo.id}>
                <td>{Todo.Todo}</td>
                <td>
                  {Todo.completed === true ? (
                    <FontAwesomeIcon icon={faCheck} />
                  ) : (
                    <FontAwesomeIcon icon={faXmark} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
