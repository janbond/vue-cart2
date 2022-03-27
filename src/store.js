import Vue from 'vue';
import Vuex from 'vuex';
//import data from "../assets/data.json";
Vue.use(Vuex);

const LESSONS_URL = 'https://api.hiskio.com/v1/professions';

const store = new Vuex.Store({
  state: {
    lessons: [],
    
  },
  
  mutations: {
    setLessons(state, lesson){
      state.lesson = lesson;
    },
    
  },
  actions: {
    fetchLessons({commit}){
      fetch(LESSONS_URL)
        .then(rs => rs.json())
        .then(rs => {
          commit('setLessons', rs.courses);
        });
    },
  },
});

export default store;