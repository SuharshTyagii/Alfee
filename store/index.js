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
      generatedStories: ['Mitochondria are the powerhouses that provide energy for your body to do its work. They use oxygen in a process called respiration to create adenosine triphosphate or ATP which provides energy for all of your cells. The mitochondria also use glucose as an energy source through a process called glycolysis which creates pyruvate. The pyruvate is then used in cellular respiration (also known'],
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