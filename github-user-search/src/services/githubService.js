import axios from "axios";

const API_URL = "https://api.github.com/search/users"; // GitHub Search API

export const fetchUserData = async (username, location = "", minRepos = "") => {
  try {
    // Construct the query parameters based on the inputs
    let query = `q=${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;
    
    const response = await axios.get(`${API_URL}?${query}`);
    return response.data.items; // Return the list of users matching the criteria
  } catch {
    throw new Error("User not found or query error");
  }
};
