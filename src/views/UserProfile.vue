<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 600px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">Hello!</h1>
                        <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                    </div>
                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-12 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-lg-3 order-lg-2">
                                <h2 class="text-primary">Upload your profile photo</h2>
                            </div>
                               
                    <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div  class="card-profile-image" >
                                        <img v-if="picture" style="width:190px;height:190px" :src="picture" class="rounded-circle">
                                        <img v-else src="img/theme/72.png" style="width:190px;height:190px"  class="rounded-circle">
                                         
                                </div>
                            </div>
                        </div>
                        <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                            <div class="d-flex justify-content-between">
                               <input type="file" @change="previewImage" accept="image/*" >
                                    <!-- <p>Progress: {{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress>  </p> -->
                                      <base-button size="sm" v-if="!uploading" type="info" class="mr-4" @click="onUpload">Upload</base-button>
                                      <base-button size="sm" v-if="uploading" disabled type="info" class="mr-4">Uploading</base-button>
                                      
                            </div>
                        </div>
                
                    </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">User information</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Username"
                                                        placeholder="Username"
                                                        input-classes="form-control-alternative"
                                                        v-model="userObj.username"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Email address"
                                                        placeholder="jesse@example.com"
                                                        input-classes="form-control-alternative"
                                                        v-model="userObj.email"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="First name"
                                                        placeholder="First name"
                                                        input-classes="form-control-alternative"
                                                        v-model="userObj.first"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Last name"
                                                        placeholder="Last name"
                                                        input-classes="form-control-alternative"
                                                        v-model="userObj.last"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Address -->
                                <h6 class="heading-small text-muted mb-4">Contact information</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <base-input alternative=""
                                                        label="Address"
                                                        placeholder="Home Address"
                                                        input-classes="form-control-alternative"
                                                        v-model="userObj.address"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="City"
                                                        placeholder="City"
                                                        input-classes="form-control-alternative"
                                                        v-model="userObj.city"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Country"
                                                        placeholder="Country"
                                                        input-classes="form-control-alternative"
                                                        v-model="userObj.state"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Postal code"
                                                        placeholder="Postal code"
                                                        input-classes="form-control-alternative"
                                                        v-model="userObj.postalCode"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Description -->
                                <h6 class="heading-small text-muted mb-4">About me</h6>
                                <div class="pl-lg-4">
                                    <div class="form-group">
                                        <base-input alternative=""
                                                    label="About Me">
                                            <textarea rows="4" class="form-control form-control-alternative" placeholder="A few words about you ...">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea>
                                        </base-input>
                                    </div>
                                </div>
                                <base-button type="white" @click="register">Register</base-button>
                            </form>
                        </template>
                    </card>

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
    name: 'user-profile',
    // components: {
    //         Loading,
            
    //     },
    data() {
      return {
          uploading:false,
          userObj:{
            'username':'',
            'first':'',
            'last':'',
            'email':'',
            'type':'',
            'ticket':'',
            'city':'',
            'state':'',
            'phone':'',
            'address':'',
            'postalCode':'',
            'abt':'',
            'aadhar':'',
            'registrationNo':''
            },
           imageData: null,
            uploadValue: 0,
          picture:null,
          uid:'',
        model: {
        //     imageData: null,
        //     uploadValue: 0,
        //   picture:null,
          username: '',
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          country: '',
          zipCode: '',
          about: '',
        }
      }
    },
    methods:{
    previewImage(event) {
     // this.uploadValue=0;
     this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },
        onUpload(){
      this.uploading=true
      this.uid=localStorage.getItem('uid')
      this.picture=null;
      let storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
          db.doc('users/'+this.uid).update({
                 'photoURL':this.picture
          })
          this.uploading=false
        });
      }
      )
           
     
    },
    register(){
        this.uid=localStorage.getItem('uid')
        db.doc('newUser/'+this.uid).set(this.userObj).then(()=>{
            this.$router.push('/dashboard')
        })
    }

    },
    beforeMount(){
        this.uid=localStorage.getItem('uid')
         db.doc('users/'+this.uid).get().then(user=>{
                 this.picture=user.data().photoURL
          }).then(()=>{
              db.doc('newUser/'+this.uid).get().then(snap=>{
                  if(snap.data()){
                      this.userObj=snap.data()
                  }
              })
          })
    }

  };
</script>
<style></style>
