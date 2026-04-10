import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://smart-xml-solutions-backend.vercel.app/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
