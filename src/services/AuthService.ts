import axiosInstance from "@/modules/axios";
import router from "@/router";
import EventBus from "@/common/EventBus";

const AuthService = {
    login(email: string, password: string) {
        axiosInstance
            .post("/api/auth/login", {
                email: email,
                password: password
            })
            .then(response => {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                router.push({
                    name: "Home"
                });
                EventBus.emit("success", "success.login");
            })
            .catch(response => {
                if (response.response.status == 401) {
                    EventBus.emit("error", "error.login");
                } else {
                    EventBus.emit("error", "error.unknown");
                }
            });
    },
    signup(email: string, password: string) {
        axiosInstance
            .post("/api/auth/register", {
                email: email,
                password: password
            })
            .then(response => {
                router.push({
                    name: "Login"
                });
                EventBus.emit("success", "success.signup");
            })
            .catch(response => {
                if (response.response.status == 400) {
                    EventBus.emit("error", "error.signup");
                } else if (response.response.status == 415) {
                    EventBus.emit("error", "error.validation");
                }

                else {
                    EventBus.emit("error", "error.unknown");
                }
            })
    }
};

export default AuthService;
