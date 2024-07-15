import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isLoggedIn: false,
        user: null,
        token: null,
        sessionKey: null
    }),
    actions: {
        login(user) {
            this.isLoggedIn = true;
            this.user = user;
        },
        logout() {
            this.isLoggedIn = false;
            this.user = null;
            this.token = null;
            this.sessionKey = null;
        },
        setToken(token) {
            this.token = token;
            this.isLoggedIn = true;
        },
        setSessionKey(sessionKey) {
            this.sessionKey = sessionKey;
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
