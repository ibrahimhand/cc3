import React from "react";
import "./ListTodo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ListTodo() {
  const { id } = useParams();
  const userList = useSelector((state) => state.user.data);
  const todoList = useSelector((state) => state.todoList.data);
  const selectedUser = userList.users.filter((user) => user.id == id);
  const selectedToDos = todoList.todos.filter((todo) => todo.id == id);
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
            {selectedToDos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.todo}</td>
                <td>
                  {todo.completed === true ? (
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
