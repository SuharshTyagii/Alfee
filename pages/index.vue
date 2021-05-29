<template>
   <div>
    <div  class="container">
      <h1 class="title">
        Alfee 
      </h1>     
        </div>
        <h2 class=" text-4xl  text-yellow-600 text-center">
          - A helper brain for the teacher.
        </h2>
        <br>
        <br>
      <div class=" text-center text-xl">
       Showing interfaces for - <span class="text-gray-500"> student</span> / 
       <span class="text-gray-500">teacher</span> / <span class=" text-yellow-600">both</span>.
      </div>
      <br>
      <div class="userInterface flex justify-around ">
         <div class="w-1/2 text-center px-4"> <!-- teachers section begins here -->
        <div class=" pl-5 pr-3 py-4   bg-gray-100 shadow-md  ">
          <span class=" subtitle ">Teacher's Dashboard.</span>
          </div>
          <div class="grid pt-2 pb-1 font-semibold border-gray-400 px-6 center text-left border-opacity-60 border grid-cols-8  gap-2">
              <div class="col-span-3">Topic</div>
              <div class="col-span-2">Theme</div>
              <div>Tries</div>
              <div class="col-span-2">Generate Story</div>

          </div>
          <div v-for="item in teacherSelections" :key="item.id" class="px-2 " 
          :class="[item.id%2==1 ? 'bg-yellow-300': 'bg-yellow-200']">
          <button @click="removeTopic(item.id)" class="bg-red-500 px-3 text-white text-center mr-2 absolute left-2 w-5 h-5">X</button>
            <TodaysTopics :topic="item.topic" :theme="item.theme" :tries="item.tries" />
          </div>
          <div class=" flex justify-between py-2">
            <input type="text" v-model="newTopic" class="bg-white w-3/4 border border-black rounded shadow-md pl-4 "
             placeholder="Topic to be taught today, e.g: mitochondria"> 
            <button class="bg-green-500 rounded px-4 w-1/4 text-white shadow-md py-1" 
            @click="addTopic(newTopic)">Add</button>
            </div>
          
              <div class="bg-gray-100 w-full pt-3 text-center h-1/2">
              <span class="subtitle text-purple-300 py-5 ">Generated Stories</span>
              <div class="flex justify-between ">
                  <textarea class="border border-black px-4 py-3 w-5/6 rounded-2xl
                   bg-white text-left">awdawdawdawd </textarea>
                   <button class="bg-green-400 text-white w-1/6 rounded-2xl center " alt ="Send to chat">              
<svg  height="24" viewBox="0 0 24 24" class="mx-auto " width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"/><path d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"/></svg>
                    </button>

              </div>

              </div>  

        </div>
        <div class="px-4 pr-3 py-4   bg-gray-100 shadow-md w-1/2 ">
          <div class="text-center">
            <span class=" subtitle   ">Student's Dashboard.</span>
          </div>
          
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      teacherSelections:[{'id':1,'topic':'Mitochondria',
      'theme':'sci-fi', 
      'tries':'1'}],
      newTopic: '',
      triesNum: '1',

    }
  },
  methods: {
    addTopic(newTopic){
      if(newTopic !== ''){
      this.teacherSelections.push({'id':this.teacherSelections.length+1,
      'topic':this.newTopic,'tries':'1'})
      this.newTopic = ''
      }
    },
    removeTopic(i){
      this.teacherSelections.splice(Number(i)-1,1)
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
