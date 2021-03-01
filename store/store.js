import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        articles: []
    },
    mutations: {
        addArticles(state, text) {
            state.articles.push(text)
        },
        fetch(state) {
            return state.articles;
        }
    }
})