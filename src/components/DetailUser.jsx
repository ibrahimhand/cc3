import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailUser = (props) => {
  const { id } = useParams();

  const user = props.users.find((user) => user.id === id);

  return (
    <div>
      <img src={user.image} alt={user.name} />
      <div>First Name: {user.firstName}</div>
      <div>Last Name: {user.lastName}</div>
      <div>Age: {user.age}</div>
      <div>Gender: {user.gender}</div>
      <div>Email: {user.email}</div>
      <div>Phone: {user.phone}</div>
      <div>Poids: {user.poids}</div>
      <div>Hauteur: {user.hauteur}</div>
      <div>Date de naissance: {user.dateNaissance}</div>
      <div>Groupe sanguin: {user.groupeSanguin}</div>
      <div>Couleur de l'œil: {user.couleurOeil}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(DetailUser);
