import { createStore } from "vuex";

export default createStore({
    state: {
        cart: [],
        summary: [0, 0],
        isVisible: false,
    },
    getters: {
        items: (state) => {
            return state.cart.length
        },
        cost: (state) => {
            return state.summary.reduce(function(a, b) {
                return a + b
            })
        }
    },
    mutations: {
        changeVisibilityFalse(state) {
            state.isVisible = false
        },
        changeVisibilityTrue(state) {
            state.isVisible = true
        }
    },
    actions: {


    },
    modules: {},
});