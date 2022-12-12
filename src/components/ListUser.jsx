import React from "react";
import "./ListUser.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import User from "./../User/User";
import Accueil from "./Acceuil";

export default function ListUser() {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.User);
  return (
    <div className="ListUsers">
      {data.length != 0 &&
        data.Users.map((User) => (
          <User
            key={User.id}
            image={User.image}
            nom={`${User.firstName} ${User.lastName}`}
            details={(e) => navigate(`/DetailUser/${User.id}`)}
            ListTaches={(e) => navigate(`/ListTodo/${User.id}`)}
          />
        ))}
    </div>
  );
}
