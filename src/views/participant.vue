<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 600px; background-image: url(img/theme/pexels-photo-3183183.jpeg; background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-2"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-1 text-white">Participants Details</h1>
                        <p class="text-white mt-0 mb-5">Here are the details of youe event's participants</p>
                        
                    </div>
                </div>
            </div>
            
        </base-header>
        <div class="container-fluid mt--7" >
            <div class="col-xl-12 order-xl-2 mb-5 mb-xl-0">

                    <div class="card card-profile shadow" style="background-image: url(img/theme/bharath-g-s-aLGiPJ4XRO4-unsplash.jpg; background-size: cover; background-position: center top;">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                        <img v-if="picture" style="width:200px;height:200px" :src="picture" class="rounded-circle">
                                        <img v-else src="img/theme/images (8).jpg" class="rounded-circle">
                                    
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
                                            <span class="heading">Goverment ID</span>
                                            <img style="width:200px;height:200px" :src="this.usersObj.aadhar" class="rounded-circle">
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
    
</template>
<script>
import firebase from '@/firebase_init.js';
let db = firebase.firestore();
const auth = firebase.auth();
export default {
    name:'participants',
    data(){
        return{
       usersObj:{},
       picture:null
        }

    },
    props:{
        uid:String,
        eventID:String,
    },
    beforeMount(){
        let uid=this.$route.params.uid
        let eventID=this.$route.params.eventID
        console.log(uid)
        console.log(eventID)
        db.doc('users/'+uid).get().then(u=>{
            this.picture=u.data().photoURL
            console.log(u.data().photoURL)
            console.log("jksdb")
            console.log(this.picture)
        }).then(()=>{
            db.collection('AllUsers/'+uid+'/'+eventID).onSnapshot(snapshot=>{
            console.log(eventID)
               snapshot.forEach(doc=>{
                   console.log(doc.data())
                   this.usersObj=doc.data()
                   console.log(this.usersObj)
               })
        })
        })
    }
    
}
</script>
