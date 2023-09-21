import { defineStore } from "pinia"
import { useToastr } from "../modules/toastr"

import axios from "../modules/axios"

const { notification } = useToastr();

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
    }),

    getters: {
        user: (state) => state.authUser,
    },

    actions: {
        async getToken() {
            await axios.get("/sanctum/csrf-cookie");
        },

        async login({ email, password }) {
            try {
                this.getToken();
                const response = await axios.post("/api/login", {
                    email,
                    password,
                });
                this.authUser = response.data.data || null;
            } catch (error) {
                if (error.response && error.response.status === 422) {
                    notification(error.response.data.errors, "info");
                } else {
                    notification(error.response.data.message, "error");
                }
            }
        },

        async checkAuth() {
            try {
                const response = await axios.get("/api/user");
                this.authUser = response.data.data || null;
            } catch (error) {
                notification(error.response.data.message, "error");
            }
        },
    },
});
