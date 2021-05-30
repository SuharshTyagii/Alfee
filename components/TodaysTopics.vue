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
    
    }
    // console.log('generating stories for ' + this.topic)
  const res = this.$axios.post('https://robmcknight.pythonanywhere.com/generate', 
  {
    "topic":"jupiter",
    "theme":"sci-fi",
    "tries":"1"
  }, 
  {
    headers : headers,
  },
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
    }
    ).catch((err)=> {
      this.disabled= false
      this.generateButtonText = 'Try Again.'
    })
    }
  }
}
}
</script>

<style>

</style>