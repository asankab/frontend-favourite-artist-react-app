import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile(props) {
  const { user, isAuthenticated } = useAuth0();
  //   return (
  //     isAuthenticated && (
  //       <div>
  //         <img src={user.picture} alt={user.name} />
  //         <h2>{user.name}</h2>
  //         <p>{user.email}</p>
  //         {JSON.stringify(user, null, 2)}
  //       </div>
  //     )
  //   );
  return (
    isAuthenticated && (
      <div>
        {/* <img src={user.picture} alt={user.name} /> */}
        <span>{user.name}</span>
      </div>
    )
  );
}

Profile.propTypes = {};

export default Profile;
