<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
           <div class="card shadow col-xl-8 mb-5 mb-xl-0"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            List
          </h3>
        </div>
        <div class="col text-right">
          <base-button type="primary" size="sm">See all</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="tableData">
        <template slot="columns">
          <th>Registration ID</th>
          <th>Participant Name</th>
          <th>Date</th>
          
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            <div class="media align-items-center">
              <div class="media-body">
                 <router-link :to="{path:'/participant/'+eveid+'/'+row.uuid}"><span class="name mb-0 text-sm">{{row.regID}}</span></router-link>
              </div>
            </div>
          </th>
          <td class="media-body">
            {{row.usernam}}
          </td>
          <td>
            
              <span class="status">{{row.dor}}</span>
          </td>

        </template>

      </base-table>
    </div>

    <div class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <base-pagination total="30"></base-pagination>
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
    name: 'projects-table',
    props: {
      type: {
        type: String,
      },
       eventID:String,
      title: String
    },
    data() {
      return {
        eveid:'',
        tableData:[],
        // tableData: [
        //   {
        //     img: 'img/theme/bootstrap.jpg',
        //     title: 'Argon Design System',
        //     budget: '$2500 USD',
        //     status: 'pending',
        //     statusType: 'warning',
        //     completion: 60
        //   },
        //   {
        //     img: 'img/theme/angular.jpg',
        //     title: 'Angular Now UI Kit PRO',
        //     budget: '$1800 USD',
        //     status: 'completed',
        //     statusType: 'success',
        //     completion: 100
        //   },
        //   {
        //     img: 'img/theme/sketch.jpg',
        //     title: 'Black Dashboard',
        //     budget: '$3150 USD',
        //     status: 'delayed',
        //     statusType: 'danger',
        //     completion: 72
        //   },
        //   {
        //     img: 'img/theme/react.jpg',
        //     title: 'React Material Dashboard',
        //     budget: '$4400 USD',
        //     status: 'on schedule',
        //     statusType: 'info',
        //     completion: 90
        //   },
        //   {
        //     img: 'img/theme/vue.jpg',
        //     title: 'Vue Paper UI Kit PRO',
        //     budget: '$2200 USD',
        //     status: 'completed',
        //     statusType: 'success',
        //     completion: 100
        //   }
        // ]
      }
    },
    beforeMount(){
        let eventID=this.$route.params.eventID
        db.collection('AllEvents').get().then(snapshot=>{
            snapshot.forEach(doc => {
                if(doc.id==eventID){
                    console.log(doc.id)
                    console.log(doc.data().registeredUsers)
                    this.tableData=doc.data().registeredUsers
                    console.log(this.tableData)
                    this.eveid=doc.id
                }
            })
        })

    }

  }
</script>
<style>
</style>