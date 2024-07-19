import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isLoggedIn: false,
        role: null,
        token: null
    }),
    actions: {
        login(user) {
            this.isLoggedIn = true;
            this.role = user.role;
        },
        logout() {
            this.isLoggedIn = false;
            this.role = null;
            this.token = null;
        },
        setToken(token) {
            this.token = token;
            this.isLoggedIn = true;
        },
        persist(data){
            this.role = data.role;
            this.token = data.tokens;
            this.isLoggedIn = true;
        }
    },
    getters: {
        getAccesstoken: (state) => {
            if (state.token) {
                return state.token.accessToken;
            }
            return null;
        },
        getRefreshToken: (state) => {
            if (state.token) {
                return state.token.refreshToken;
            }
            return null;
        },
    },
});
