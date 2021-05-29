<template>
  <div class=" flex justify-between py-2 align-center ">

<div class="px-2 py-2 w-2/5 text-lg font-semibold">{{topic}} </div>
            <select name="" v-model="selectedTheme" id="" class="border border-gray-400 px-4 w-1/5">
            <option value="sciFi">Sci-fi</option>
           <option value="fantasy">Fantasy</option>
           <option value="rap">Rap</option>
          </select>
          <div>
          <input type="number" max="5" min="1"
            v-model="selectedTries"  class="border border-gray-400 px-6 py-4 " id="">
            
          </div>
            <button class="bg-purple-600 rounded px-4 w-1/4 text-white shadow-md py-1" 
            @click="generateStory">Generate Story</button>
            </div>    

  </div>
</template>

<script>
export default {
props:['id', 'topic','theme','tries'],
data(){
  return{
    selectedTries : 1,
    selectedTheme: 'sciFi',
  }
},
methods:{
  generateStory(){
    console.log('generating stories for ' + this.topic)
  }
}
}
</script>

<style>

</style>