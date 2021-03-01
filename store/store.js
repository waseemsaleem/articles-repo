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
    },
    modules: {
        articles: {
          namespaced: true,
          state: () => ({
            list: []
          }),
          mutations: {
            add(state, { text }) {
              state.list.push({
                text,
                done: false
              })
            },
            remove(state, { article }) {
              state.list.splice(state.list.indexOf(article), 1)
            }
          }
        }
    }
})