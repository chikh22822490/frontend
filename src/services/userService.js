import http from "../httpCommon";

class userService {

    login(username, password) {
        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        return http.post("/user/login", null, {
            headers: {
                "Content-Type": "multipart/form-data",
                'Access-Control-Allow-Origin': '*'
            },
            params: {
                "username": username,
                "password": password
            }
        });
    }

}

export default new userService();