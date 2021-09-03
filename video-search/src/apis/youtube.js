import axios from "axios";

const KEY = "AIzaSyCEep__WoeUe8uzvDHvXQJWcnlET1Pn5hY";

export default axios.create({
  baseURL: "https;//www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});