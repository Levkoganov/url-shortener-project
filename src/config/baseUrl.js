import axios from "axios";

// url api
export default axios.create({
  baseURL: "https://api.shrtco.de/v2/",
});
