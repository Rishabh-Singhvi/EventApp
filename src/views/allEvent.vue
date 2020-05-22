<template>
    <div style="background-image: url(img/theme/a.jpg);background-size: cover; background-position: center top;min-height: 600px">
        
       
        
            <!-- Card stats -->
            <div class="row" style="padding-top:100px;margin-left:10px;margin-right:10px"  >
              <div class="columns col-xl-3 col-lg-6" v-for="event in eventList" v-bind:key="event.title">
                    <stats-card type="gradient-red"
                                :sub-title="event.title"
                                class="mb-4 mb-xl-0"
                                style="background-image: url(img/theme/back.jpg);background-size: cover; background-position: center top;"
                    >
                
                        <template slot="footer">
                          <hr class="my-4" />
                            <span class="text-primary mr-4 font-weight-300" style="padding-right:10px" >Time slot : </span><span>{{event.timings.start}}</span> to <span>{{event.timings.end}}</span><br>
                            <span class="text-primary mr-4 font-weight-300" style="padding-right:35px">Date : </span><span>{{event.timings.date}} </span>
                            <br>
                            <br>
                            <p class="text-danger mr-4 font-weight-300">Details : {{event.description}}</p>
                            
                        <router-link :to="{path:'/Meetup/'+event.id}" ><base-button  type="default" style="margin-left:50px">View Details</base-button></router-link>

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
  name:'All Event',
       data() {
        return {
          user:{},
          eventList:[],
          uid:''
        };
      }, 
    beforeMount(){
      this.uid = localStorage.getItem('uid')
      console.log(this.uid)
      db.doc('users/'+this.uid).get().then(snap=>{
        console.log(snap.data())
        this.user=snap.data()
        console.log(this.user)
      }).then(()=>{
         db.collection('AllEvents').onSnapshot(snapshot=>{
          this.eventList = []
          let event = {}
          snapshot.forEach(doc=>{
            console.log(doc.id) 
            event = doc.data()
            console.log(event)
            event['id']=doc.id
            if(!this.user.registeredEvents.includes(event.id)){
            this.eventList.push(event)
            }
          })
          console.log(this.eventList)
        })
      })
     
    },
    
}
</script>

