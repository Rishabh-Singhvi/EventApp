<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 500px; background-image: url(img/theme/a.jpg); background-size: cover; background-position: center top;">
            <!-- Mask -->
            <!-- <span class="mask bg-gradient-success opacity-1"></span> -->
            <!-- Header container -->
                         <span class="mask bg-gradient-success opacity-2"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-10 col-md-5">
                        <h6 class="display-4 text-white">Here are your registered event's and your details</h6>
                        <p></p>
                        
                    </div>
                </div>
            </div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <div class="container-fluid mt--7" >
            <div class="row">
             <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">

                    <div class="card card-profile shadow">
                        <div class="row justify-content-center" >
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    
                                        <img src="img/theme/d.jpg" class="rounded-circle">
                                   
                                </div>
                            </div>
                        </div>
                        <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4" style="background-image: url(img/theme/bharath-g-s-aLGiPJ4XRO4-unsplash.jpg; background-size: cover; background-position: center top;">
                            
                        </div>
                        <div class="card-body pt-0 pt-md-4" style="background-image: url(img/theme/bharath-g-s-aLGiPJ4XRO4-unsplash.jpg; background-size: cover; background-position: center top;">
                            <div class="row">
                                <div class="col">
                                    <div class="card-profile-stats d-flex justify-content-center mt-md-1">
                                        <div>
                                            <span class="heading">Event Details</span>
                                            <span class="description">Event</span>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="card-profile-stats d-flex justify-content-center mt-md-1">
                                        <div>
                                            <h5>Date</h5>
                                            <span class="ni education_hat mr-2">{{eventObj.timings.date}}</span>
                                        </div>
                                         <div>
                                            <h5>Start Time</h5>
                                            <span class="ni education_hat mr-2">{{eventObj.timings.start}}</span>
                                        </div>
                                         <div>
                                            <h5>End Time</h5>
                                            <span class="ni education_hat mr-2">{{eventObj.timings.end}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          <div class="text-center">
                                <h4 class="h12 mt-15">
                                    {{eventObj.title}}
                                </h4>
                               <p>{{eventObj.description}}</p>
                                
                                <h4>Venue</h4>
                                <p>{{eventObj.address}},{{eventObj.city}},{{eventObj.state}},{{eventObj.postalCode}}</p>
                                <hr class="my-4" />
                                <h4>Contact Information</h4>
                              <div class="row">
                                <div class="col">
                                    <div class="card-profile-stats d-flex justify-content-center mt-md-1">
                                        <div>
                                            <h4>Email</h4>
                                            <span class="ni education_hat mr-2">{{eventObj.email}}</span>
                                        </div>
                                         <div>
                                            <h4>Phone</h4>
                                            <span class="ni education_hat mr-2">{{eventObj.phoneNo}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="col-xl-8 order-xl-2 mb-5 mb-xl-0">

                    <div class="card card-profile shadow" style="background-image: url(img/theme/bharath-g-s-aLGiPJ4XRO4-unsplash.jpg; background-size: cover; background-position: center top;">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                
                                        <img src="img/theme/images (8).jpg" class="rounded-circle">
                                    
                                </div>
                            </div>
                        </div>
                        <br>
                        <br>
                        <div class="card-body pt-0 pt-md-4" style="background-image: url(img/theme/bharath-g-s-aLGiPJ4XRO4-unsplash.jpg; background-size: cover; background-position: center top;">
                            <div class="row">
                                <div class="col">
                                    <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                                        <div>
                                            <span class="heading">Registration ID</span>
                                            <span class="ni education_hat mr-2">{{this.usersObj.registrationNo}}</span>
                                        </div>
                                        <div>
                                            <span class="heading">First Name</span>
                                            <span class="ni education_hat mr-2">{{this.usersObj.first}}</span>
                                        </div>
                                        <div>
                                            <span class="heading">Last Name</span>
                                            <span class="ni education_hat mr-2">{{this.usersObj.last}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <br>
                            <div class="row">
                                <div class="col">
                                    <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                                        <div>
                                            <span class="heading">Email</span>
                                            <span class="ni education_hat mr-2">{{this.usersObj.email}}</span>
                                        </div>
                                        <div>
                                            <span class="heading">Phone Number</span>
                                            <span class="ni education_hat mr-2">{{this.usersObj.phone}}</span>
                                        </div>
                                        <div>
                                            <span class="heading">Registration Type</span>
                                            <span class="ni education_hat mr-2">{{this.usersObj.type}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <br>
                                <div class="row">
                                <div class="col">
                                    <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                                        <div>
                                            <span class="heading">No. of Tickets</span>
                                            <span class="ni education_hat mr-2">{{this.usersObj.ticket}}</span>
                                        </div>
                                        <div>
                                            <span class="heading">AadharNo.</span>
                                            <span class="ni education_hat mr-2">{{this.usersObj.aadhar}}</span>
                                        </div>
                                        <div>
                                            <span class="heading">Address</span>
                                            <span class="ni education_hat mr-2">{{this.usersObj.address}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <hr class="my-4" />
        
                        </div>
                    </div>
                </div>
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
          usersObj:{},
          eventObj:{},
          eventList:[],
          uid:''
        };
      }, 
   beforeMount(){

      
      this.uid = localStorage.getItem('uid') 
      let eventID=this.$route.params.eventID
        console.log(this.uid)
        console.log(eventID)
        db.collection('AllUsers/'+this.uid+'/'+eventID).get().then(snapshot=>{
            console.log(eventID)
               snapshot.forEach(doc=>{
                   console.log(doc.data())
                   this.usersObj=doc.data()
                   console.log(this.usersObj)
               })
        }).then(()=>{
         db.collection('AllEvents').get().then(snapshot=>{
             snapshot.forEach(doc=>{
                 if(doc.id==eventID){
                     console.log(doc.id)
                     console.log(doc.data())
                     this.eventObj=doc.data()
                     console.log(this.eventObj);
                     
                 }
                
             })
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
