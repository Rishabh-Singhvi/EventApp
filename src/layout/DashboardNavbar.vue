<template>
    <base-nav class="navbar-top navbar-dark"
              id="navbar-main"
              :show-toggle-button="false"
              expand>
        <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <div class="form-group mb-0">
                <!-- <base-input placeholder="Search"
                            class="input-group-alternative"
                            alternative=""
                            addon-right-icon="fas fa-search">
                </base-input> -->
            </div>
        </form>
        <ul class="navbar-nav align-items-center d-none d-md-flex">
            <li class="nav-item dropdown">
                <base-dropdown class="nav-link pr-0">
                    <div class="media align-items-center" slot="title">
                <span class="avatar rounded-circle">
                  <img v-if="picture" style="width:50px;height:50px" alt="Image placeholder" :src="picture">
                  <img v-else alt="Image placeholder" src="img/theme/www.jpg">
                </span>
                        <div class="media-body ml-2 d-none d-lg-block">
                            <h1 class="mb-0 text-sm  font-weight-bold">Ions Event Creations</h1>
                        </div>
                    </div>

                    <template>
                        <div class=" dropdown-header noti-title">
                            <h6 class="text-overflow m-0">Welcome!</h6>
                        </div>
                        <router-link to="/profile" class="dropdown-item">
                            <i class="ni ni-single-02"></i>
                            <span>My profile</span>
                        </router-link>
                      
                        
                        
                        <div class="dropdown-divider"></div>
                           <div class="dropdown-item">
                            <i class="ni ni-user-run" ></i>
                            <span @click="Logout">Logout</span>
                           </div>
                        
                    </template>
                </base-dropdown>
            </li>
        </ul>
    </base-nav>
</template>
<script>
import firebase from '@/firebase_init.js';
let db = firebase.firestore();
const auth = firebase.auth();
  export default {
    data() {

      return {
        uid:'',
        picture:null,
        activeNotifications: false,
        showMenu: false,
        searchQuery: ''
      };
    },
    methods: {
      Logout(){
          auth.signOut().then(()=>{
            console.log("Logged Out")
            this.$router.push('/login')
          })
      },
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      hideSidebar() {
        this.$sidebar.displaySidebar(false);
      },
      toggleMenu() {
        this.showMenu = !this.showMenu;
      }
    },
    beforeMount(){
      this.uid=localStorage.getItem('uid')
      if(this.uid){
        db.doc('users/'+this.uid).get().then(u=>{
          if(u.data()){
            this.picture=u.data().photoURL
          }
        })
      }
    }
  };
</script>
