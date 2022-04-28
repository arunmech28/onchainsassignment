import axios from "axios";

export const getAllMessages = async () => {
    return axios.get("http://localhost:5000/messages");
};
