import React from "react";

const UserProfile = ({ user, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Looks like we can't find the user.</p>;

  return (
    user && (
      <div className="user-profile">
        <img src={user.avatar_url} alt={user.name} width="100" />
        <h2>{user.name}</h2>
        <p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </p>
      </div>
    )
  );
};

export default UserProfile;
