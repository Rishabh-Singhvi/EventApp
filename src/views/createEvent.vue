<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 600px; background-image: url(img/theme/pexels-photo-3183183.jpeg); background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h4 class="display-4 text-white">Create your Event</h4>
                        <p class="text-white mt-0 mb-5">This is your event creation page. You can create your event here</p>
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
                                <div class="col-8">
                                    <h3 class="mb-0">My Event</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Event Information</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Title"
                                                        placeholder="Title"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.username"
                                            />
                                            
                                        </div>
                                        <div class="upload-btn-wrapper col-lg-6">
                                            <h4>Upload an image of the event</h4>
                                            <base-button type="primary" icon="ni ni-bag-17">Choose Image</base-button>
                                            <input type="file" name="myfile" id="in" />
                                        </div>
                                    </div>
                                   <div class="row"> 
                                    <div class="col-lg-6">
                                    <h4>Event Date</h4>
                                     <base-input addon-left-icon="ni ni-calendar-grid-58">
                                        <flat-picker slot-scope="{focus, blur}"
                                                    @on-open="focus"
                                                    @on-close="blur"
                                                    :config="{allowInput: true}"
                                                    class="form-control datepicker"
                                                    v-model="dates.simple">
                                        </flat-picker>
                                    </base-input>
                                    </div>
                                    <div class="col-lg-3">
                                      <h4>Start Time</h4>
                                       <vue-timepicker id="vue-timepicker" label="from" format="hh:mm A"></vue-timepicker>
                                    </div>
                                    <div class="col-lg-3">
                                      <h4>End Time</h4>
                                       <vue-timepicker id="vue-timepicker" label="from" format="hh:mm A"></vue-timepicker>
                                    </div>
                                  </div>
                                     <div >
                                       <h4>Description</h4>
                                       <form>
                                        <textarea class="form-control form-control-alternative" rows="3" placeholder="Write a large text here ..."></textarea>
                                       </form>
                                     </div>
                                     <br>
                                     <div class="row col-lg-6">
                                            <base-dropdown>
                                            <base-button slot="title" type="default" class="dropdown-toggle">
                                                Select Destination
                                            </base-button>
                                            <li>
                                                <a class="dropdown-item">
                                                    India
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item"  >
                                                    Switzerland
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item"  >
                                                    Japan
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item">
                                                    Canada
                                                </a>
                                            </li>
                                        </base-dropdown>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Address -->
                                
                                <h6 class="heading-small text-muted mb-4">Contact Information</h6>
                                
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Email ID"
                                                        placeholder="Email ID"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.city"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Phone Number"
                                                        placeholder="Phone Number"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.country"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </template>
                    </card>
                    <br>
                    <base-button type="success">Create</base-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import VueTimepicker from 'vue2-timepicker'

import 'vue2-timepicker/dist/VueTimepicker.css'

  export default {
    name: 'user-profile',
    components: {flatPicker,
    VueTimepicker},
    data() {
      return {
        model: {
          username: '',
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          country: '',
          zipCode: '',
          about: '',
        },
        waterMark : 'Select a time',
        dates: {
            simple: "2018-07-17"
          }
      }
    },
  };
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
