import axios from "axios";

const API_URL = "https://api.github.com/users/";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}${username}`);
    return response.data;
  } catch {
    throw new Error("User not found"); // No need to use the `error` variable
  }
};
