import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Import the new function

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");  // New state for location
  const [minRepos, setMinRepos] = useState(""); // New state for minimum repositories
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim() === "") return;

    setLoading(true);
    setError(null);
    setUsers([]);  // Reset previous search results

    try {
      const userData = await fetchUserData(username, location, minRepos);  // Pass the extra params
      setUsers(userData);
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container max-w-4xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="search-form space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Display the advanced results */}
      {users.length > 0 && (
        <div className="user-results mt-4 space-y-4">
          {users.map((user) => (
            <div key={user.login} className="user-profile p-4 border rounded">
              <img src={user.avatar_url} alt={user.login} width="100" className="rounded-full" />
              <h2 className="text-lg">{user.login}</h2>
              <p><strong>Location:</strong> {user.location || "Not specified"}</p>
              <p><strong>Repositories:</strong> {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Visit GitHub Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
