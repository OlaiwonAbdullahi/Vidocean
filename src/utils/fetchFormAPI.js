import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": "b8ef490beemshc78108332381208p1cc891jsn167f1fd3a95e", // This will fetch from .env
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  // Check if the key is loading
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
