import axios from "axios";

const API = axios.create({
    baseURL: "https://medicare-app-backend.onrender.com/api",
});

export default API;
