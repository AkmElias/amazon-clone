import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/clone-9fb43/us-central1/api", //api url cloud function
});

export default instance;
