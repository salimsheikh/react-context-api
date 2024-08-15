import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.username}!</h2>
          <p>Your password is {user.password}</p>
        </>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
};

export default Profile;
