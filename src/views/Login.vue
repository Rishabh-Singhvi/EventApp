<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-header bg-transparent pb-5">
                        <div class="text-muted text-center mt-2 mb-3"><small>Sign in with</small></div>
                        <div class="btn-wrapper text-center">
                            
                            <a href="#" class="btn btn-neutral btn-icon">
                                <span class="btn-inner--icon"><img src="img/icons/common/google.svg"></span>
                                <span class="btn-inner--text">Google</span>
                            </a>
                        </div>
                    </div>
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            <small>Or sign in with credentials</small>
                        </div>
                        <form role="form">
                            <base-input class="input-group-alternative mb-3"
                                        placeholder="Email"
                                        addon-left-icon="ni ni-email-83"
                                        v-model="email">
                            </base-input>

                            <base-input class="input-group-alternative"
                                        placeholder="Password"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="password">
                            </base-input>

                            <base-checkbox class="custom-control-alternative">
                                <span class="text-muted">Remember me</span>
                            </base-checkbox>
                            <div class="text-center">
                                <base-button @click="loginEmail" type="primary" class="my-4">Sign in</base-button>
                            </div>
                            <base-alert type="warning" v-if="error">
                                <strong>{{error}}</strong>
                            </base-alert>
                        </form>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-6">
                        <a href="#" class="text-light"><small>Forgot password?</small></a>
                    </div>
                    <div class="col-6 text-right">
                        <router-link to="/register" class="text-light"><small>Create new account</small></router-link>
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
        name: 'login',
        data() {
            return {
                email: '',
                password: '',
                error:''
            }        
        },
        methods:{
            loginGoogle(){
                var provider = new firebase.auth.GoogleAuthProvider();
                auth.signInWithPopup(provider)
                .then(snapshot=>{
                    let user = snapshot.user
                    console.log(user)
                    return db.doc("users/"+user.uid).get()
                    .then(doc => {
                        if(!doc.exists){
                            return db.doc("users/"+ user.uid).set({
                                name : user.displayName,
                                email: user.email,
                                registeredEvents:[],
                                photoURL:user.photoURL
                            })
                        }
                        else {
                            console.log(doc.data())
                            localStorage.setItem('uid',doc.id)
                            localStorage.setItem('user',JSON.stringify(doc.data()))
                        }
                    })
                })
                .then(()=>{
                    this.$router.push('dashboard')
                })
            },
            loginEmail(){
                auth.signInWithEmailAndPassword(this.email,this.password).then(user=>{
                    localStorage.setItem('uid',user.id)
                    localStorage.setItem('user',JSON.stringify(user))
                    this.$router.push('dashboard')
                })
                .catch(err=>{
                    this.error = err.message
                    console.log(err)
                })
            }
        }
  }
</script>
<style>
</style>
