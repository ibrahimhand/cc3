import React from "react";
import "./DetailUser.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function DetailUser() {
  const { id } = useParams();
  const { data } = useSelector((state) => state.user);
  const selectedUser = data.users.filter((user) => user.id == id);
  return (
    <div>
      {selectedUser.map((user) => (
        <div className="Details" key={user.id}>
          <div className="image">
            <img src={user.image} alt="Profile Picture" />
          </div>
          <div>
            <img src={user.image} alt={user.name} />
            <div>First Name: {user.firstName}</div>
            <div>Last Name: {user.lastName}</div>
            <div>Age: {user.age}</div>
            <div>Gender: {user.gender}</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
            <div>Poids: {user.weight}</div>
            <div>Hauteur: {user.height}</div>
            <div>Date de naissance: {user.birthDate}</div>
            <div>Groupe sanguin: {user.bloodGroup}</div>
            <div>Couleur de l'œil: {user.eyeColor}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
