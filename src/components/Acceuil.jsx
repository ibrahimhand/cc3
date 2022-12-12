import React from "react";
import "./Accueil.css";
import { Routes, Route } from "react-router-dom";
import ListUser from "../ListUser";
import DetailUser from "./../DetailUser";
import ListToDo from "./../ListToDo";
export default function Accueil() {
  return (
    <div>
      <div className="Head">Gestion des tâches :</div>
      <Routes>
        <Route exact path="/" element={<ListUser />} />
        <Route path="/DetailUser/:id" element={<DetailUser />} />
        <Route path="/ListToDo/:id" element={<ListToDo />} />
      </Routes>
    </div>
  );
}
