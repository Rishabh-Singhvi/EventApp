<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8" >
 
        
            <!-- Card stats -->
            <div class="row" >
              <div class="columns col-xl-3 col-lg-6" v-for="event in eventList" v-bind:key="event.title">
                    <stats-card type="gradient-red"
                                :sub-title="event.title"
                                class="mb-4 mb-xl-0"
                                style="background-image: url(img/theme/back.jpg);background-size: cover; background-position: center top;margin-right:25px"                                
                    >
                
                        <template slot="footer">
                          <hr class="my-4" />
                            <span class="text-primary mr-4 font-weight-300" >Time slot : </span><span>{{event.timings.start}}</span> to <span>{{event.timings.end}}</span><br>
                            <span class="text-primary mr-4 font-weight-300">Date : </span><span>{{event.timings.date}} </span>
                            <br>
                            <br>
                            <p class="text-danger mr-4 font-weight-300">{{event.description}}</p>
                            
                        <!-- <router-link :to="{path:'/Meetup/'+event.id}"><base-button  type="default">View Details</base-button></router-link> -->
                        <base-button  type="default" size="sm">View details</base-button>

                        </template>
                    </stats-card>
                    <br>
              </div>
            </div>
        </base-header>

        

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
    // console.log(this.user)
      this.uid = localStorage.getItem('uid')
      db.doc('users/'+this.uid).get().then(snap=>{
        this.user=snap.data()
      })
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
            if(event.status)
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

