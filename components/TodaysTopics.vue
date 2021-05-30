<template>
  <div class=" flex justify-between py-2 align-center ">

<div class="px-2 py-2 w-2/5 text-lg font-semibold">{{topic}} </div>
            <select name="" v-model="selectedTheme" id="" class="border border-gray-400 px-4 w-1/5">
            <option value="sciFi">Sci-fi</option>
           <option value="fantasy">Fantasy</option>
           <option value="rap">Rap</option>
          </select>
          <div>
          <input type="number" max="3" min="1"
            v-model="selectedTries" 
            :class="[selectedTries>3?'bg-red-400 text-white': 'bg-green-200']"  class="border border-gray-400 px-6 py-4 " id="">
            
          </div>
            <button class="rounded px-4 w-1/4 text-white shadow-md py-1" 
            :class="[disabled ? 'bg-gray-600':'bg-purple-600']" 
            @click="generateStory">{{generateButtonText}}</button>
            </div>    

  </div>
</template>

<script>
export default {
props:['id', 'topic','theme','tries', 
'username','password'],
data(){
  return{
    selectedTries : 1,
    selectedTheme: 'sciFi',
    disabled: false,
    generateButtonText: 'Generate !'
  }
},
methods:{
  generateStory(){
    if (this.disabled == false){
      this.disabled=true
      this.generateButtonText = 'Wait!'
    const headers = {
      'Content-Type': 'application/json',
    "Access-Control-Allow-Origin":"*",
    "Authorization" : "Basic" + window.btoa(this.username+':'+this.password)
    }
    // console.log('generating stories for ' + this.topic)
  const res = this.$axios.post('https://robmcknight.pythonanywhere.com/generate', 
  {
    "topic":this.topic,
    "theme":this.selectedTheme,
    "tries":this.selectedTries
  }, 
  // {
  //   headers : headers,
  // },
  {
    auth: {
    username:this.username,
    password:this.password
    }
  } 
    ).then((res) => 
    {
      console.log(res.data)
      this.disabled= false
      this.generateButtonText = 'Generate Again'
      for (let i=0; i < res.data.stories.length; i++)
      {
        this.$store.state.generatedStories.push(res.data.stories[i])
        console.log('pushing this to stories')
        console.log(res.data.stories)
       this.$store.state.editedStories.push(res.data.stories[i])
        }

    }
    ).catch((err)=> {
      this.disabled= false
      console.log(JSON.stringify(res.data))
      console.log(err)
      this.generateButtonText = 'Try Again.'
    })
    }
  }
}
}
</script>

<style>

</style>