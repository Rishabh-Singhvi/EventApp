<template>
    <div>
        <base-header
                     style="min-height: 600px; background-image: url(img/theme/56.jpg; background-size: cover; background-position: center top;padding-left:350px;padding-top:13px">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-1">            
                        
            </span>
            <!-- Header container -->
            <h1 class="display-2 text-white" style="padding-top:0px">Event Registration</h1>               
                                                                              
        </base-header>

        <div class="container-fluid mt--7">
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
                        <div class="card-body pt-0 pt-md-4" style="background-image: url(img/theme/114.jpg; background-size: cover; background-position: center top;">
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
                                            <span class="description">{{eventObj.timings.date}}</span>
                                        </div>
                                         <div>
                                            <h5>Start Time</h5>
                                            <span class="description">{{eventObj.timings.start}}</span>
                                        </div>
                                         <div>
                                            <h5>End Time</h5>
                                            <span class="description">{{eventObj.timings.end}}</span>
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
                                            <span class="description">{{eventObj.email}}</span>
                                        </div>
                                         <div>
                                            <h4>Phone</h4>
                                            <span class="description">{{eventObj.phoneNo}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-8 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Event Registration</h3>
                                </div>
                                <div class="col-4 text-right">
                                   
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
                                                        label="First name"
                                                        placeholder="First name"
                                                        input-classes="form-control-alternative"
                                                        v-model="userObj.first"
                                                        v-validate="'required'"
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
                                     <div class="row">
                                        
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Email address"
                                                        placeholder="abc@example.com"
                                                        input-classes="form-control-alternative"
                                                        v-model="userObj.email"
                                            />
                                        </div>
                                         <div class="col-lg-3">
                                            <!-- <div class="row col-lg-6"> -->
                                            <h5>Registration Type</h5>
                                            <base-dropdown>
                                            <base-button slot="title" type="default" class="dropdown-toggle" v-if="userObj.type">
                                               {{userObj.type}}
                                            </base-button>
                                            <base-button slot="title" type="default" class="dropdown-toggle" v-else>
                                               Select 
                                            </base-button>
                                            <li>
                                                <a class="dropdown-item" @click="setType('Self')">
                                                   Self
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" @click="setType('Group')" >
                                                   Group
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" @click="setType('Corporate')" >
                                                    Corporate
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" @click="setType('Others')">
                                                    Others
                                                </a>
                                            </li>
                                        </base-dropdown>
                                    <!-- </div> -->
                                        </div>

                                        <div class="col-lg-2">
                                            <!-- <div class="row col-lg-6"> -->
                                            <h5>Book tickets</h5>
                                             <base-dropdown>
                                            <base-button slot="title" type="default" class="dropdown-toggle" v-if="userObj.ticket">
                                               {{userObj.ticket}}
                                            </base-button>
                                            <base-button slot="title" type="default" class="dropdown-toggle" v-else>
                                               tickets
                                            </base-button>
                                            <li>
                                                <a class="dropdown-item" @click="setTicket('1')">
                                                    1
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" @click="setTicket('2')" >
                                                    2
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" @click="setTicket('3')" >
                                                    3
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" @click="setTicket('4')">
                                                    4
                                                </a>
                                            </li>
                                        </base-dropdown>
                                            
                                    <!-- </div> -->
                                        </div>
                                    </div>
                                </div>
                                 
                                <hr class="my-4" />
                                <!-- Address -->
                                <h6 class="heading-small text-muted mb-4">Contact information</h6>
                                <div class="pl-lg-4">
                                      <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Address"
                                                        placeholder="Address"
                                                        input-classes="form-control-alternative"
                                                        v-model="userObj.address"
                                            />
                                            
                                        </div>
                                         <div class="col-lg-6">
                                             <h4 v-if="picture" class="text-success">Uploaded!</h4>                                             
                                             <h4 v-else>Upload any goverment ID</h4>
                                             <div style="display:inline-block">
                                            <input type="file" @change="previewImage" accept="image/*" >
                                    <!-- <p>Progress: {{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress>  </p> -->
                                         
                                           <base-button size="sm" type="info" class="mr-4" @click="onUpload" style="margin-top:5px">Upload</base-button>
                                            <base-button v-if="uploading" size="sm" type="danger" class="mr-4" @click="onUpload" style="margin-top:5px">Uploading...</base-button>
                                            
                                             </div>
                                            
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
                                                        label="State"
                                                        placeholder="State"
                                                        input-classes="form-control-alternative"
                                                        v-model="userObj.state"
                                            />
                                        </div>
                                        
                                        <div class="col-lg-18">
                                            
                                            <base-input alternative=""
                                                        label="Phone Number"
                                                        placeholder="Phone Number"
                                                        input-classes="form-control-alternative"
                                                        v-model="userObj.phone"
                                            />
                                            
                                            
                                        </div>
                                        
                                        
                                        
                                    </div>
                                     
                                </div>
                                
                                <hr class="my-4" />
                                <!-- Description -->
                               
                                <div class="pl-lg-4">
                                    
                                </div>
                            </form>
                        </template>
                    </card>
                    <br>
                       <div class="col-md-3">
                        <base-button block type="warning" class=" mb-3" @click="mode">
                            Submit
                        </base-button>

                    
                            <modal :show.sync="modals.modal2"
                            gradient="warning"
                            modal-classes="modal-danger modal-dialog-centered">
                            <h6 slot="header" class="modal-title heading mt-1" id="modal-title-notification">Preview</h6>
                            <div class="py-3 text-center">
                                <i class="ni ni-circle-08 ni-3x"></i>
                                <h4 class="heading mt-4">Your Details</h4>
                                <p>Are you sure you want to register</p>
                            </div>
                            <span class="mb-4">Name :</span><span>{{userObj.first}} 
                                {{userObj.last}}</span>
                            <br>
                            <span>Email :</span><span>{{userObj.email}} </span>
                            <br>
                            <span>Phone No. :</span><span>{{userObj.phone}}</span>
                            <br>
                            <span>Regitration Type :</span><span>{{userObj.type}}</span>
                            <br>
                            <span>Tickets Quantity :</span><span>{{userObj.ticket}}</span>
                            <br>
                            <span>Goverment ID :</span><span>{{userObj.aadhar}}</span>
                            <br>
                            <span>Address :</span><span>{{userObj.address}},{{userObj.city}},{{userObj.state}}</span>
                            

                            <template slot="footer">
                                <loading :active.sync="isLoading" 
                                    :can-cancel="true" 
                                    :on-cancel="onCancel"
                                    :is-full-page="fullPage"></loading>
                                <base-button type="white" @click="register(eventID)">Register</base-button>
                                <base-button type="link"
                                            text-color="white"
                                            class="ml-auto"
                                            @click="modals.modal2 = false">
                                    Close
                                </base-button>
                            </template>
                        </modal>
                        <modal :show.sync="modals.modal1"
                            gradient="danger"
                            modal-classes="modal-danger modal-dialog-centered">
                            <h6 slot="header" class="modal-title heading mt-1" id="modal-title-notification">Preview</h6>
                            <div class="py-3 text-center">
                                <i class="ni ni-circle-08 ni-3x"></i>
                                <h4 class="heading mt-4"></h4>
                                <p>All fields are mandatory</p>
                            </div>
                            

                            <template slot="footer">
                                <loading :active.sync="isLoading" 
                                    :can-cancel="true" 
                                    :on-cancel="onCancel"
                                    :is-full-page="fullPage"></loading>
                                <base-button type="white" @click="modals.modal1 = false">Close</base-button>
                            </template>
                        </modal>
                   </div>
                </div>
            </div>
        </div>
        
    </div>
    
</template>
<script>
import emailjs from 'emailjs-com';
import Loading from 'vue-loading-overlay';
    // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import firebase from '@/firebase_init.js';
let db = firebase.firestore();
const auth = firebase.auth();

 
// Add the required rule


  export default {
    name: 'user-profile',
    props:{
       eventID:String
    },
    components: {
            Loading,
            
        },
 
    data() {
      return {
          isLoading: false,
          userObj:{},
          eventObj:{},
          uploading:false,
        modals:{
           modal2:false,
           modal1:false
        },
          user:{},
          uid:'',
          imageData: null,
            uploadValue: 0,
          picture:null,

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
      this.uploading=true;
      this.uid=localStorage.getItem('uid')
      this.picture=null;
      let storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
           console.log(this.picture)
           this.userObj.aadhar=this.picture
        });
        this.uploading=false;
      }
      )

        },
        setType(type){
            this.userObj.type=type
        },
       setTicket(ticket){
            this.userObj.ticket=ticket
        },
        mode(){
             if(this.userObj.first!=''&&this.userObj.last!=''&&this.userObj.type!=''&&this.userObj.ticket!=''&&this.userObj.email!=''&&this.userObj.phone!=''&&this.userObj.aadhar!=''&&this.userObj.address!=''&&this.userObj.state!=''&&this.userObj.city!=''){
                 this.modals.modal2=true
             }
             else{
                 this.modals.modal1=true
             }
        },
        register(){
            this.user = JSON.parse(localStorage.getItem('user'))
            this.isLoading = true;
            let eventID = this.$route.params.eventID
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;
            let uuser = {
                'uuid':'',
                'regID':'',
                'dor':'',
                'usernam':'',
                'regType':''
                }
            
            let regID = '_' + Math.random().toString(36).substr(2, 9);
            console.log(regID)
            console.log(eventID)
            db.doc('AllEvents/'+eventID).get().then(snap=>{
               let event = {}
               event = snap.data()
               console.log(event)
               uuser.uuid=this.uid
               uuser.regID=regID
               uuser.dor=today
               uuser.usernam=this.user.name
               uuser.regType=this.userObj.type
               console.log(uuser)
               event.registeredUsers.push(uuser)
               console.log(event)
               db.doc('AllEvents/'+eventID).update({
                   'registeredUsers':event.registeredUsers,
               }).then(sna=>{
                   this.user.registeredEvents.push(eventID);
                   console.log(this.user)
                   db.doc('users/'+this.uid).set(this.user)
                   this.userObj.registrationNo=regID
                   db.collection('AllUsers/'+this.uid+'/'+eventID).add(this.userObj).then(sn=>{
                       this.$notify({
                            type: 'success',
                            title: 'Registered'
                            }) 
                   }).then(s=>{
                       console.log(this.user.email)
                       var templateParams = {
                            regID: regID,
                            title: this.eventObj.title,
                            email: this.user.email
                        };
                        console.log("sdkljd")
                        console.log(templateParams)
                       this.isLoading = false
                       localStorage.setItem('user',JSON.stringify(this.user))
                       emailjs.send('gmail', 'registration_id',templateParams, 'user_G6anhzngYBJOuFmhiVGNs')
                        .then((result) => {
                            console.log('SUCCESS!', result.status, result.text);
                        }, (error) => {
                            console.log('FAILED...', error);
                        })
                        this.modals.modal1=false
                        this.modals.modal2=false
                     this.$router.push('/User_Registrations')
                  })
               })
            })

        }
    },
    beforeMount(){
        this.user = JSON.parse(localStorage.getItem('user'))
        this.uid = localStorage.getItem('uid')
        let eventID = this.$route.params.eventID
         db.collection('AllEvents').get().then(snapshot=>{
             snapshot.forEach(doc=>{
                 if(doc.id==eventID){
                     this.eventObj=doc.data()
                 }
             })
         }).then(()=>{
             db.doc('newUser/'+this.uid).get().then(snap=>{
                 if(snap.data()){
                 console.log(snap.data())
                 this.userObj=snap.data()
                 }
                 else{
                     this.userObj={
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
            }
                 }

             })
         })
    }
  };
</script>
<style></style>
