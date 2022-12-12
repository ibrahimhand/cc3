import React from "react";
import "./DetailUser.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function DetailUser() {
  const { id } = useParams();
  const { data } = useSelector((state) => state.User);
  const selectedUser = data.Users.filter((User) => User.id === id);
  return (
    <div>
      {selectedUser.map((User) => (
        <div className="Details" key={User.id}>
          <div className="image">
            <img src={User.image} alt="Profile Picture" />
          </div>
          <div>
            <img src={User.image} alt={User.name} />
            <div>First Name: {User.firstName}</div>
            <div>Last Name: {User.lastName}</div>
            <div>Age: {User.age}</div>
            <div>Gender: {User.gender}</div>
            <div>Email: {User.email}</div>
            <div>Phone: {User.phone}</div>
            <div>Poids: {User.weight}</div>
            <div>Hauteur: {User.height}</div>
            <div>Date de naissance: {User.birthDate}</div>
            <div>Groupe sanguin: {User.bloodGroup}</div>
            <div>Couleur de l'œil: {User.eyeColor}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
