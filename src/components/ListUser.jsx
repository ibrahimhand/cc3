import React from 'react';
import './ListUser.css'; 
import { connect } from 'react-redux';




const ListUser = (props) => {
  const users = props.users;

  const userGroups = [];
  for (let i = 0; i < users.length; i += 4) {
    userGroups.push(users.slice(i, i + 4));
  }

  return (
    <div className="list-user">
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((user, index) => {
          if (index % 4 === 0) {
            return (
              <li key={user.id}>
                <p>{user.name}</p>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
  
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(ListUser);
