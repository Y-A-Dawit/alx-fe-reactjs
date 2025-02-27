// import React from "react";
// import PropTypes from "prop-types";

// const UserProfile = (props) => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>Age: {props.age}</p>
//       <p>Bio: {props.bio}</p>
//     </div>
//   );
// };

// UserProfile.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   bio: PropTypes.string.isRequired,
// };

// export default UserProfile;




import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  // Get user data from context instead of props
  const user = useContext(UserContext);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
};

export default UserProfile;
