<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 500px; background-image: url(img/theme/a.jpg); background-size: cover; background-position: center top;">
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
                    <br>
                    <br>
                    <br>
                     <br>
                    <br>
                    <br>
            <div class="container-fluid d-flex align-items-center" >
               
            </div>
        </base-header>

        <div class="container-fluid mt--7"  style="min-height: 200px; background-image: url(img/theme/a.jpg); background-size: cover; background-position: center top;">
            <div class="row">
        

                <div class="col-xl-12 order-xl-1"  >
                    
                    <card shadow type="secondary" >
                      
                        <template >
                            
                            <form @submit.prevent  style="min-height: 600px; background-image: url(img/theme/1.jpg); background-size: cover; background-position: center top;">
                                <h2 style="padding-left:21px;padding-top:20px;padding-bottom:0px;r">  Event Information</h2>
                                 <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image" style="padding-bottom:0px">
                                    <a href="#">
                                        <img src="img/theme/45.jpg" class="rounded-circle" >
                                    </a>                     
                            </div>
                            </div>
                        </div>
                    </div>

  <br>
                      <br>
                      <br>
                      <br>
                      <br>
                                
                                <div v-for="event in eventList" v-bind:key="event.title">
                                           
                                            
                                 <div class="pl-lg-4">     


         <div class="row justify-content-center"  style="margin-right:20px;" >
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <div class="card-header bg-transparent pb-5"  style="min-height: 100px; background-image: url(img/theme/15.jpg); background-size: cover; background-position: center top;color:black">
                           
                                           <div class="row">
                                                <div class="column"  style="padding-left:20px">Title   </div>
                                                 <div class="column"  style="padding-left:50px">{{event.title}}</div>
                                           </div>

                                            <div class="row">
                                                <div class="column"  style="padding-left:20px">Date   </div>
                                                 <div class="column"  style="padding-left:45px">{{event.timings.date}}</div>
                                           </div>

                                           <div class="row">
                                                <div class="column"  style="padding-left:20px">Details   </div>
                                                 <div class="column"  style="padding-left:30px">{{event.description}}</div>
                                           </div>

                                            <div class="row">
                                                <div class="column"  style="padding-left:20px">Type  </div>
                                                 <div class="column"  style="padding-left:45px">{{event.type}}</div>
                                           </div>

                                           <div class="row">
                                                <div class="column"  style="padding-left:20px">City  </div>
                                                 <div class="column"  style="padding-left:50px">{{event.city}}</div>
                                          </div>                           

                </div>
            </div>
        </div>
    </div>            

    
                                                        
                               
                                     <h2 style="padding-left:0px;padding-top:20px;align:center" >Contact Information</h2>
                                       <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image" style="padding-bottom:0px">
                                    <a href="#">
                                        <img src="img/theme/23.png" class="rounded-circle" >
                                    </a>                     
                            </div>
                            </div>
                        </div>
                    </div>

  <br>
                      <br>
                      <br>
                      <br>
                      <br>

                               
                                 <div class="pl-lg-4">

                                    
         <div class="row justify-content-center" style="margin-bottom:70px;padding-bottom:0px;margin-right:50px;margin-left:0px" >
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0" style="min-height: 50px; background-image: url(img/theme/15.jpg); background-size: cover; background-position: center top;color:black">
               
                                   
                                         <div class="row">
                                                <div class="column"  style="padding-left:20px;padding-bottom:10px">Email  </div>
                                                 <div class="column"  style="padding-left:45px;padding-bottom:10px">{{event.email}}</div>
                                           </div>

                                           <div class="row">
                                                <div class="column"  style="padding-left:20px">Phone No.  </div>
                                                 <div class="column"  style="padding-left:10px">{{event.phoneNo}}</div>
                                          </div>

                                 </div>

                                    
                                    
                                     
                                  </div>
                                 </div>                      

                
            </div>
        </div>
    </div>
              
                                
     <h2 style="padding-left:21px;padding-top:20px;padding-bottom:0px;r">  User Details</h2>                            

                               
                                <!-- Address -->
                       <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image" style="padding-bottom:0px">
                                    <a href="#">
                                        <img src="img/theme/26.jpg" class="rounded-circle" >
                                    </a>                     
                            </div>
                            </div>
                        </div>
                    </div>

                      <br>
                      <br>
                      <br>
                       <br>
                       <br>
                       <br>
                       <br>

                      

 <div class="row justify-content-center"  style="margin-right:20px" >
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <div class="card-header bg-transparent pb-5" style="min-height:100px; background-image: url(img/theme/15.jpg); background-size: cover; background-position: center top;color:black" >
                           
                                           <div class="row">
                                                <div class="column"  style="padding-left:20px">Name  </div>
                                                 <div class="column"  style="padding-left:50px"></div>
                                           </div>

                                            <div class="row">
                                                <div class="column"  style="padding-left:20px">Email  </div>
                                                 <div class="column"  style="padding-left:45px"></div>
                                           </div>

                                           <div class="row">
                                                <div class="column"  style="padding-left:20px">Phone no.   </div>
                                                 <div class="column"  style="padding-left:30px"></div>
                                           </div>

                                            <div class="row">
                                                <div class="column"  style="padding-left:20px">Aadhar No. </div>
                                                 <div class="column"  style="padding-left:45px"></div>
                                           </div>

                                           <div class="row">
                                                <div class="column"  style="padding-left:20px">City  </div>
                                                 <div class="column"  style="padding-left:50px"></div>
                                          </div>
                             



                </div>
            </div>
        </div>
    </div>                      

 <br>
<br>                                 
                                
                               
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
