import axios from "axios";

export default axios.create({
  baseURL: "https://data.mongodb-api.com/app/kitzone-functions-wqhlr/endpoint",
  headers: {
    "Content-type": "application/json"
  }
});