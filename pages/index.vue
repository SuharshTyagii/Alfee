<template>
   <div class="pb-40">
    <div  class="container">
      <h1 class="title">
        Alfee 
      </h1>     
      <div class="absolute right-5 top-5 shadow-lg">
        <div class="inline-flex">
          <label class="px-2 mx-2 font-semibold text-lg" for="">Username</label>
          <input class="px-2 border border-black" v-model="username" type="text">
          <label class="px-2 font-semibold text-lg" for="">Password</label>
          <input class="border border-black" type="password" v-model="password" >
          <!-- <span></span> -->
        </div>
      </div>
        </div>
        <h2 class=" text-4xl  text-yellow-600 text-center">
          - Turn <span class="font-semibold">Teachers</span> into <span class="text-yellow-600 font-bold">Super-Teachers</span>  using AI.
        </h2>
        <h2 class="text-2xl pt-2 text-black-900 text-center">
          [Powered via GPT-3]
        </h2>
        <br>
        <br>
      <div class=" text-center text-xl">
       Showing interfaces for - <span @click="showForChange(0)" class="cursor-pointer"
       :class="[showFor==0?'text-yellow-600':'text-gray-500']">teacher</span> / 
       <span class="cursor-pointer" @click="showForChange(1)" 
       :class="[showFor==1?'text-yellow-600':'text-gray-500']">student</span> / 
       <span class="cursor-pointer" @click="showForChange(2)"  
       :class="[showFor==2?'text-yellow-600':'text-gray-500']">both</span>.
      </div>
      <br>
      <div class="userInterface flex justify-around ">
         <div v-if="showFor==0 || showFor ==2" class="w-1/2 text-center px-4"> <!-- teachers section begins here -->
        <div class=" pl-5 pr-3 py-4   bg-yellow-100 shadow-md  ">
          <span class=" subtitle ">Teacher's Dashboard.</span>
          </div>
          <div class="grid pt-2 pb-1 font-semibold border-gray-400 px-6 center text-left border-opacity-60 border grid-cols-8  gap-2">
              <div class="col-span-3">Topic</div>
              <div class="col-span-2">Theme</div>
              <div>Stories Count</div>
              <div class="col-span-2">Generate Story</div>

          </div>
          <div v-for="item in teacherSelections" :key="item.id" class="px-2 " 
          :class="[item.id%2==1 ? 'bg-yellow-300': 'bg-yellow-200']">
          <button @click="removeTopic(item.id)" class="bg-red-500 px-3 text-white text-center mr-2 absolute left-2 w-5 h-5">X</button>
            <TodaysTopics :username="username" :password="password"
             :topic="item.topic" :theme="item.theme" :tries="item.tries" />
          </div>
          <div class=" flex justify-between py-2">
            <input type="text" v-model="newTopic" class="bg-white w-3/4 border border-black rounded shadow-md pl-4 "
             placeholder="Topic to be taught today, e.g: mitochondria"> 
            <button class="bg-green-500 rounded px-4 w-1/4 text-white shadow-md py-1" 
            @click="addTopic(newTopic)">Add</button>
            </div>
          <!-- Generated stories -->
              <div class="bg-yellow-100 w-full pt-3 text-center h-1/2">
              <span class="subtitle text-purple-300 py-5 ">Generated Stories</span>
                <div class="text-lg" v-if="getGeneratedStories.length==0">
                    Please click generate to generate some stories first. Make sure the password is there in the top right corner of the screen.
                </div>
                <div v-else  class="flex justify-between py-4 "
                 v-for="item in getGeneratedStories.slice().reverse()" :key="item">
                  <textarea class="border border-black text-lg font-semibold px-4 py-3 h-full
                  w-5/6  rounded-2xl 
                   bg-white text-left" rows="8"
                    :value="item" >
                    </textarea>
                   <button @click="sendToStudents(item)" 
                   class="bg-green-400 text-white w-1/6 px-4 shadow-lg pl-4 py-4 rounded-2xl center " alt ="Send to chat">              
<svg  height="24" viewBox="0 0 24 24" class="mx-auto " width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"/><path d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"/></svg>
                    </button>
              </div>

              </div>

                <div class="bg-gray-100 w-full pt-3 text-center">
              <span class="subtitle text-purple-300 py-5 ">Student's Responses</span>
                <div v-for="item in chatsAll"  class="bg-yellow-100 py-4 my-2 " :key="item" >
                   <div v-if="item.saidBy=='Student'" class="bg-yellow-300 px-4 py-4 text-left">
                   <span class="font-bold">>></span>   {{item.message}}
                    </div>
                </div>

              </div>  

        </div>
        <div v-if="showFor==1 || showFor ==2" class="px-4 pr-3 py-4 h-full  bg-gray-200 shadow-md w-1/2 ">
          <div class="text-center">
            <span class=" subtitle   ">Student's Dashboard.</span>
            <div class="pb-10">
              <div  v-for="item in chatsAll" :key="item" class="flex flex-col py-4">
                  <div v-if="item.saidBy=='Alfee'" class="flex float-left items-center text-xl bg-blue-200 rounded-md "  >
                  <img class="inline object-cover w-16 h-16 mr-2 rounded-full" src="~/static/alfee_pp.png" alt="Alfee"/>
            <div class="text-left">{{item.message}}</div>
                    </div>

  <div v-else class="flex  items-center justify-items-end flex-row-reverse text-xl bg-green-200 rounded-md "  >
                 <img class="inline object-cover w-16 h-16 mr-2 rounded-full"
                  src="~/static/student.png" alt="Alfee"/>
            <div class="text-right px-4">{{item.message}}</div>

                    </div>

              </div>
                  
                  <!-- student puts chat -->
                <!-- <div  v-for="item in studentQuestions" :key="item" class="flex flex-col py-4" >
                   <div class="flex  items-center justify-items-end flex-row-reverse text-xl bg-green-200 rounded-md "  >
                 <img class="inline object-cover w-16 h-16 mr-2 rounded-full"
                  src="~/static/student.png" alt="Alfee"/>
            <div class="text-right px-4">{{item}}</div>

                    </div>
                    </div> -->
              <div>

              </div>
          <!-- student chat part -->
              <div class="flex float-left w-full h-12">
                <input type="text" v-model="studentQues" placeholder="Ask your questions " 
                class="pl-4  w-3/4 bg-gray-200 rounded-full border shadow-md border-gray-500">
                <button @click="studentAsked" class="bg-green-500 w-1/4 rounded-full shadow-md">Ask</button>
              </div>
            </div>
          </div>

               <div class="text-center mt-32 pt-12 bg-blue-200 shadow-md">
            <span class=" subtitle   ">Student's Dashboard (Experimental)</span>
            <br>
            <button @click="showVirbe=(!showVirbe)"
             class="rounded-sm px-6 py-4 bg-purple-300 w-full">
             Show/Hide</button>
            <div v-if="showVirbe" class="h-screen w-full">
                <iframe class="h-full w-full" src="https://web-plugin.virbe.app/api/v1/live-preview.html?id=4ba26baf-dbb6-4d95-acb5-d341b1c2c2da&s=true" title="W3Schools Free Online Web Tutorials">
              </iframe>
            </div>
          </div>

          
        </div>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data(){
    return{
      showFor:2,
      showVirbe:false,
      studentQues : 'I wish it could do rap battles',
      studentQuestions : ['Ughh. Solar Systems SO Boring!!' ],
      username:'teamalfee',
      password:'',
      teacherSelections:[{'id':1,'topic':'Mitochondria',
      'theme':'sci-fi', 
      'tries':'3'},
      {'id':2,'topic':'The Solar System',
      'theme':'rap', 
      'tries':'3'}],
      newTopic: '',
      triesNum: '3',
    chatsAll:[{'message': 'Hello Class', 'saidBy':'Alfee'},
    {'message': 'This is Alfee, let me know if you need help with anything', 'saidBy':'Alfee'},
    {'message':'Ughh. Solar Systems SO Boring!', 'saidBy':'Student'}],
     studentChats : ['Hello Class', 'This is Alfee.'],
    }
  },
  computed : {
      ...mapGetters(['getGeneratedStories', 'getEditedStories'])

  },
  // watch:{
  //   getGeneratedStories : function(getGeneratedStories, ){
  //     this.localStories.push()
  //   }
  // },
  methods: {
    showForChange(i){
      this.showFor=parseInt(i)
    },
    studentAsked(i){
      this.chatsAll.push({'message':this.studentQues, 'saidBy':'Student'})
      this.studentQues = ''
    },
    addTopic(newTopic){
      if(newTopic !== ''){
      this.teacherSelections.push({'id':this.teacherSelections.length+1,
      'topic':this.newTopic,'tries':'1'})
      this.newTopic = ''
      }
    },
    removeTopic(i){
      this.teacherSelections.splice(Number(i)-1,1)
    },
    sendToStudents(i){
      this.chatsAll.push({'message':String(i), 'saidBy':'Alfee'})
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
#autoresizing {
            display: block;
      
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
