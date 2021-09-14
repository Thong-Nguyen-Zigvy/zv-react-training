import axios from "axios";

import authHeader from "./auth-header";

const API_URL = "http://localhost:9000/api/users";

class UserService {
    getUserList(){
        return axios.get(API_URL, {headers: authHeader()});
    }

    getUserInfo() {
        return axios.get(API_URL + "/my", {headers: authHeader()});
    }
}

export default new UserService();
