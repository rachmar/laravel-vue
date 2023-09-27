import axios from "axios"
import { defineStore } from "pinia"


export const useTodoStore = defineStore('todo', {
    state: () => ({
        currentTodos: []
    }),
    getters: {
        todos: (state) => state.currentTodos,
        totalTodos: (state) => {
            return state.currentTodos.length || 0
        }
    },
    actions: {
        async getTodos() {
            const data  = await axios.get('https://jsonplaceholder.typicode.com/todos')
            this.currentTodos = data.data || []
        }
    }
})