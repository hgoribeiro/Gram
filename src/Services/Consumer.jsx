import axios from "axios";

export const apiConsummer = axios.create(
    {
        baseURL: "http://localhost:8080/"
    }

);

