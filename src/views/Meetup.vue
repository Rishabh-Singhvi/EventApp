<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 600px; background-image: url(img/theme/Event1.jpg; background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-2"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">Event Registration</h1>
                        <p class="text-white mt-0 mb-5">This is event registration page.You can learn more about the event and register here</p>
                        
                    </div>
                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">

                    <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img src="img/theme/d.jpg" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                            
                        </div>
                        <div class="card-body pt-0 pt-md-4">
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
                            </div>                            </div>
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
                                                        v-model="userObj.firstName"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Last name"
                                                        placeholder="Last name"
                                                        input-classes="form-control-alternative"
                                                        v-model="userObj.lastName"
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
                                               Select Event Type
                                            </base-button>
                                            <li>
                                                <a class="dropdown-item" @click="setType('DJ Party')">
                                                    DJ Party
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" @click="setType('Festival celebration')" >
                                                    Festival celebration 
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" @click="setType('Drink party')" >
                                                    Drink party
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" @click="setType('Poet Conference')">
                                                    Poet Conference
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
                                        <div class="col-md-12">
                                           
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
                                                        v-model="userObj.country"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Phone Number"
                                                        placeholder="Phone Number"
                                                        input-classes="form-control-alternative"
                                                        v-model="userObj.phone"
                                            />
                                        </div>
                                    </div>
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
                                            <base-input alternative=""
                                                        label="Aadhar Card Number"
                                                        placeholder="Aadhar Number"
                                                        input-classes="form-control-alternative"
                                                        v-model="userObj.aadhar"
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
                        <base-button block type="warning" class=" mb-3" @click="modals.modal2 = true">
                            Submit
                        </base-button>

                        <modal :show.sync="modals.modal2"
                            gradient="danger"
                            modal-classes="modal-danger modal-dialog-centered">
                            <h6 slot="header" class="modal-title" id="modal-title-notification">Your attention is required</h6>

                            <div class="py-3 text-center">
                                <i class="ni ni-bell-55 ni-3x"></i>
                                <h4 class="heading mt-4">You should read this!</h4>
                                <p>A small river named Duden flows by their place and supplies it with the
                                    necessary regelialia.</p>
                            </div>

                            <template slot="footer">
                                <base-button type="white">Ok, Got it</base-button>
                                <base-button type="link"
                                            text-color="white"
                                            class="ml-auto"
                                            @click="modals.modal2 = false">
                                    Close
                                </base-button>
                            </template>
                        </modal>
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
    name: 'user-profile',
    props:{
       eventID:String
    },
    data() {
      return {

          userObj:{
            'firstname':'',
            'lastname':'',
            'email':'',
            'type':'',
            'ticket':'',
            'city':'',
            'country':'',
            'phone':'',
            'aadhar':'',
            'address':''
            
          },
          eventObj:{},
        modals:{
           modal2:false
        }

      }
    },
    methods:{
        setType(type){
            this.userObj.type=type
            console.log(this.userObj.type)
        },
       setTicket(ticket){
            this.userObj.ticket=ticket
            console.log(this.userObj.ticket)
        }
    },
    beforeMount(){
        let eventID = this.$route.params.eventID
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
    }
  };
</script>
<style></style>
