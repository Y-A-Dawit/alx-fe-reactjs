import axios from 'axios';

// GitHub Search API URL
const API_URL = "https://api.github.com/search/users";

export const fetchUserData = async (username, location = "", minRepos = "") => {
  try {
    // Construct the query string based on the user's inputs
    let query = `q=${username}`;
    
    // Add location to query if it's provided
    if (location) query += `+location:${location}`;
    
    // Add minimum repositories to query if it's provided
    if (minRepos) query += `+repos:>=${minRepos}`;

    // Make the API request with the constructed query string
    const response = await axios.get(`${API_URL}?${query}`);
    
    // Return the list of users matching the search criteria
    return response.data.items;
  } catch {
    // If there's an error, throw it for further handling
    throw new Error('User not found or query error');
  }
};
