import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        currentUser: null,
        count: 0
    }),
    actions: {
        incrementCount() {
            this.count++
        }
    },
    persist: true
})