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
            })
            .catch(response => {
                if (response.response.status == 401) {
                    EventBus.emit("error", "error.login");
                } else {
                    EventBus.emit("error", "error.unknown");
                }
            });
    }
};

export default AuthService;
