/* eslint-disable */
import Vuex from 'vuex'

const randomIntGenerator = (maxNum) => {
  return Math.floor(Math.random() * (maxNum - 1) + 1)
}
const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      generatedStories: [],
      editedStories:['this got edited']
    },
    getters: {

      chosenTags(state) {
        return state.chosenTags;
      },
      getGeneratedStories(state){
        return state.generatedStories;
      },
      getEditedStories(state){
        return state.editedStories;
      }
      
   
    },
    mutations: {
      randomInt() {
        return Math.floor(Math.random() * 8) + 1
      },

    },
    actions:

    {
      addTag(context, payload) {
        context.commit('addTag', payload)
      },


    }
  })
}

export default createStore