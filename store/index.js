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
      generatedStories: [
        // 'Mitochondria was the first one to start rapping, which started the apopto-autog rap war! Mitochondria tried to stop Apoptosis with a few phagocytotic bars, but he got hit by Autophagy\'s nuclear bombs and lost the battle.He then went into hiding for decades until his son Cytochrome c came out of hiding and defeated Autophagy in an epic rap battle that changed society'
      ],
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