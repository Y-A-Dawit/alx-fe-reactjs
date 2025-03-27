import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Import the function

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim() === "") return;

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const userData = await fetchUserData(username); // Use fetchUserData
      setUser(userData);
    } catch {
      setError("Looks like we cant find the user"); // Show error if user is not found
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      {/* Search Input */}
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Display Messages */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}  {/* Display error message */}

      {/* Display User Info */}
      {user && (
        <div className="user-profile">
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h2>{user.login}</h2>
          <p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              Visit GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
