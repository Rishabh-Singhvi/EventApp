<template>
    <div style="min-height:900px;min-width: 700px; background-image: url(img/theme/41.jpg); background-size: cover; background-position: center top;">
     
            <base-header style="min-height:325px;min-width: 700px; background-image: url(img/theme/create.jpg); background-size: cover; background-position: center top;" >
            </base-header>
        
            <!-- Card stats -->
            <div class="row" style="padding-top:100px;margin-left:20px;" >
              <div class="columns col-xl-3 col-lg-6" v-for="event in eventList" v-bind:key="event.title" style="margin-left:30px;">
                    <stats-card type="gradient-red"
                                :sub-title="event.title"
                                class="mb-4 mb-xl-0"
                                style="background-image: url(img/theme/back.jpg);background-size: cover; background-position: center top;margin-right:25px;min-height:300px;min-width:300px;"                                
                    >
                
                        <template slot="footer">
                          <hr class="my-4" />
                            <span class="text-primary mr-4 font-weight-300"  style="padding-right:10px">Time slot : </span><span>{{event.timings.start}}</span> to <span>{{event.timings.end}}</span><br>
                            <span class="text-primary mr-4 font-weight-300" style="padding-right:35px">Date : </span><span>{{event.timings.date}} </span>
                            <br>
                            <br>
                            <p class="text-danger mr-4 font-weight-300" >{{event.description}}</p>
                            
                        <router-link :to="{path:'/ListofUsers/'+event.id}"><base-button  type="default" style="margin-left:55px">View Details</base-button></router-link>
                        

                        </template>
                    </stats-card>
                    <br>
              </div>
            </div>
      
        

    </div>
</template>
<script>
import firebase from '@/firebase_init.js';
let db = firebase.firestore();
const auth = firebase.auth();
export default {
       data() {
        return {
          user:{},
          eventList:[],
          uid:''
        };
      }, 
    beforeMount(){
      this.user = JSON.parse(localStorage.getItem('user'))
      console.log(this.user)
      this.uid = localStorage.getItem('uid')
      this.getEventList()
    },
    methods:{
      getEventList(){
        db.collection('AllEvents').onSnapshot(snapshot=>{
          this.eventList = []
          let event = {}
          snapshot.forEach(doc=>{
            console.log(doc.id) 
            event = doc.data()
            console.log(event)
            event['id']=doc.id
            // if(!this.user.registeredEvents.includes(event.id))
            this.eventList.push(event)
          })
          console.log(this.eventList)
        })
      },
    //   register(eventId){
        
    //     db.doc('tests/'+eventId).get().then(snapshot=>{
    //       let eventObj = snapshot.data()
    //       eventObj.registeredUsers.push(this.uid)
    //       console.log(eventObj)
    //       firebaseApp.db.doc('tests/'+eventId).update({
    //         'registeredUsers':eventObj.registeredUsers
    //       }).then(s=>{
    //         this.user.registeredTests.push(eventId);
    //         firebaseApp.db.doc('users/'+this.uid).set(this.user)
    //       }).then(s=>{
    //         localStorage.setItem('user',JSON.stringify(this.user))
    //         this.geteventList()
    //       })
    //     })
    //   }
    }
}
</script>

