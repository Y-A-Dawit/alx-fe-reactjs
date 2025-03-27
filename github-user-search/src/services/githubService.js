import axios from 'axios';

// GitHub Search API URL
const API_URL = "https://api.github.com/search/users";
const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username, location = "", minRepos = "") => {
  try {
    // Construct the query string based on the user's inputs
    let query = `q=${username}`;
    
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    // Make the API request with the constructed query string
    const response = await axios.get(`${API_URL}?${query}`, {
      headers: {
        Authorization: `token ${apiKey}` // Include API key in the headers
      }
    });

    return response.data.items;
  } catch {
    throw new Error('User not found or query error');
  }
};
