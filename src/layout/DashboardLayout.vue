<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'All Events',
            icon: 'ni ni-tv-2 text-primary',
            path: '/allEvent'
            
          }"
          v-if="udata.type=='User'" 
        />

        <sidebar-item v-if="udata.type=='User'" :link="{name: 'Registered Events', icon: 'ni ni-planet text-blue', path: '/User_Registrations'}"/>
        <sidebar-item v-if="udata.type=='Admin'" :link="{name: 'Create Event', icon: 'ni ni-pin-3 text-orange', path: '/createEvent'}"/>
        <sidebar-item v-if="udata.type=='Admin'" :link="{name: 'ListofUsers', icon: 'ni ni-single-02 text-yellow', path: '/ListofUsers'}"/>
  

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';
  import firebase from '@/firebase_init.js';
let db = firebase.firestore();
const auth = firebase.auth();

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        uid:'',
        udata:{},
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    },
    beforeMount(){
         this.uid = localStorage.getItem('uid')
         db.doc('users/'+this.uid).get().then(snap=>{
           this.udata=snap.data()
           console.log(this.udata)
         })
    }
  };
</script>
<style lang="scss">
</style>
