<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 600px; background-image: url(img/theme/a.jpg); background-size: cover; background-position: center top;">
            <!-- Mask -->
            <!-- <span class="mask bg-gradient-success opacity-1"></span> -->
            <!-- Header container -->
                          <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img src="img/theme/12.jpg" class="rounded-square" style="min-height: 150px;min-width: 450px">
                                    </a>                   
                                
                            </div>
                            </div>
                        </div>
                    </div>
            <div class="container-fluid d-flex align-items-center" >
               
            </div>
        </base-header>

        <div class="container-fluid mt--7"  style="min-height: 600px; background-image: url(img/theme/a.jpg); background-size: cover; background-position: center top;">
            <div class="row">
        

                <div class="col-xl-12 order-xl-1"  >
                    
                    <card shadow type="secondary" >
                      
                        <template >
                            
                            <form @submit.prevent  style="min-height: 600px; background-image: url(img/theme/1.jpg); background-size: cover; background-position: center top;">
                                <h2 style="padding-left:21px;padding-top:20px">  Event Information</h2>
                                
                                <div v-for="event in eventList" v-bind:key="event.title">
                                            <hr class="my-4" />
                                 <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-12">
                                          <div class="row">   
                                           <h4 style="padding-left:15px">Title   :  </h4>
                                            <h4  style="padding-left:10px">{{event.title}}</h4>
                                           </div> 
                                        </div>                                       
                                    </div>
                                   <div class="row"> 
                                    <div class="col-lg-6">
                                         <div class="row"> 
                                             <h4 style="padding-left:15px">Event Date  :</h4>
                                             <h4  style="padding-left:10px">{{event.timings.date}}</h4>
                                          </div>
                                    </div>                     
                                    </div>
                                     <div class="row"> 
                                    <div class="col-lg-6">
                                         <div class="row"> 
                                             <h4 style="padding-left:15px">Event Description  :</h4>
                                             <h4  style="padding-left:10px">{{event.description}}</h4>
                                          </div>
                                    </div>                     
                                    </div>
                                    <div class="row"> 
                                    <div class="col-lg-6">
                                         <div class="row"> 
                                             <h4 style="padding-left:15px">Event Type :</h4>
                                             <h4  style="padding-left:10px">{{event.type}}</h4>
                                          
                                          </div>
                                    </div>                     
                                    </div>
                                    <div class="row"> 
                                    <div class="col-lg-6">
                                         <div class="row"> 
                                             <h4 style="padding-left:15px">Event City  :</h4>
                                             <h4  style="padding-left:10px">{{event.city}}</h4>
                                          
                                          </div>
                                    </div>                     
                                    </div>

                                     <h2 style="padding-left:0px;padding-top:20px;align:center" >Contact Information</h2>
                                 <hr class="my-4" />
                                 <div class="pl-lg-4">
                                   
                                     <div class="row">
                                        <div class="col-lg-12">
                                          <div class="row">   
                                           <h4 style="padding-left:0px">Email  :  </h4>
                                            <h4  style="padding-left:10px">{{event.email}}</h4>
                                           </div> 
                                        </div>                                       
                                    </div>
                                   <div class="row"> 
                                    <div class="col-lg-6">
                                         <div class="row"> 
                                             <h4 style="padding-left:0px">Phone Number :</h4>
                                             <h4 style="padding-left:10px">{{event.phoneNo}}</h4>
                                          </div>
                                    </div>                     
                                    </div>


                                 </div>

                                    
                                     <br>
                                     
                                  </div>
                                 </div>    
                                
                                

                               
                                <!-- Address -->
                                 <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image" style="padding-bottom:0px">
                                    <a href="#">
                                        <img src="img/theme/d.jpg" class="rounded-circle" >
                                    </a>
                               



                            </div>
                            </div>
                        </div>


                    </div>
                    <div class="pl-lg-4">
                                       <div class="row">
                                        <div class="col-lg-12">
                                          <div class="row">   
                                           <h4 style="padding-left:15px;padding-top:50px">Name  :  </h4>
                                            <h4  style="padding-left:10px;padding-top:50px">{{user.name}}</h4>
                                           </div> 
                                        </div>                                       
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-12">
                                          <div class="row">   
                                           <h4 style="padding-left:15px">Your address :  </h4>
                                            <h4  style="padding-left:10px">{{usersObj.first}}</h4>
                                           </div> 
                                        </div>                                       
                                    </div>
                                 
                    </div>                  
                                
                               
                            </form>
                        </template>
                    </card>
                    <br>
                  
                </div>
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
          usersObj:{},
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
            if(this.user.registeredEvents.includes(event.id)){
            this.eventList.push(event)
            }
          })
          console.log(this.eventList)
        })
      }) 
      



      
    //   let eventID=this.$route.params.eventID
    //     console.log(this.uid)
    //     console.log(eventID)
    //     db.collection('AllUsers/'+this.uid+'/'+eventID).onSnapshot(snapshot=>{
    //         console.log(eventID)
    //            snapshot.forEach(doc=>{
    //                console.log(doc.data())
    //                this.usersObj=doc.data()
                   
    //            })
    //     })

     
      }
      
}
</script>
<style>

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}



.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
}
#vue-timepicker{
  width: 100%;
  padding: 6px 6px;
  margin: 5px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
}

</style>
