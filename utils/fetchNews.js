import axios from "axios";

const API_KEY = "7b2457da3068491797454dfd80a159ed";
const BASE_URL = "https://newsapi.org/v2/everything";

export default async function fetchNews() {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        domains: "wsj.com",
        apiKey: API_KEY,
      },
    });
    return response.data.articles || [];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}
