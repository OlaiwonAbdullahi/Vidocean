import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY, // Correctly use the environment variable
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error(
      "Error fetching from API",
      error.response ? error.response.data : error.message
    );
  }
};
