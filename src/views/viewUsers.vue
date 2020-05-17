<template>
            
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
        <div class="row">
           <div class="card shadow col-xl-8 mb-4 mb-xl-0"
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
    
  </div>
        <div class="col-xl-4" v-if="modals.modal1">
                    <card header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                                <h5 class="h3 mb-0">Total orders</h5>
                            </div>
                        </div>

                        <bar-chart
                                :height="350"
                                ref="barChart"
                                :chart-data="redBarChart.chartData"
                        >
                        </bar-chart>
                    </card>
                </div>
   

        </div>
        <br>
        <base-button  type="default" v-if="modals.modal1==false" @click="showChart">View Chart</base-button>
        <base-button  type="default" v-else disabled >View Chart</base-button>
        <base-button  type="default" v-if="modals.modal1==true" @click="hideChart">Hide Chart</base-button>
        <base-button  type="default" v-else disabled >Hide Chart</base-button>
        </base-header>

    </div>
        
</template>
<script>
  import * as chartConfigs from '@/components/Charts/config';
 
  import BarChart from '@/components/Charts/BarChart';
import firebase from '@/firebase_init.js';
let db = firebase.firestore();
const auth = firebase.auth();
  export default {
    name: 'projects-table',
    components: {
      
      BarChart,
    },
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
        modals:{
          modal1:false
        },
        tableData:[],
        countSelf:0,
        countGroup:0,
        countCorporate:0,
        countOthers:0,
        redBarChart: {
          chartData: {
            labels: ['Self', 'Group', 'Corporate', 'Others'],
            datasets: [{
              label: 'Registration Type',
              data: []
            }]
          }
        }
        // // tableData: [
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
        

    },
    methods:{
         showChart(){
           this.modals.modal1=true
          this.tableData.forEach(ele=>{
            if(ele.regType=='Self'){
              console.log(ele.regType)
               this.countSelf++
               console.log(this.countSelf)
            }
            if(ele.regType=='Group'){
               this.countGroup++
            }
            if(ele.regType=='Corporate'){
                 this.countCorporate++
            }
            if(ele.regType=='Others'){
                this.countOthers++
            }
          })
            this.redBarChart.chartData.datasets[0].data.splice(0,0,this.countSelf)
            this.redBarChart.chartData.datasets[0].data.splice(1,0,this.countGroup)
            this.redBarChart.chartData.datasets[0].data.splice(2,0,this.countCorporate)
            this.redBarChart.chartData.datasets[0].data.splice(3,0,this.countOthers)
            console.log(
            this.redBarChart.chartData.datasets[0].data)
            
         },
         hideChart(){
           this.modals.modal1=false
            this.countSelf=0
            this.countGroup=0
            this.countCorporate=0
            this.countOthers=0
            this.redBarChart.chartData.datasets[0].data.splice(0,0,this.countSelf)
            this.redBarChart.chartData.datasets[0].data.splice(1,0,this.countGroup)
            this.redBarChart.chartData.datasets[0].data.splice(2,0,this.countCorporate)
            this.redBarChart.chartData.datasets[0].data.splice(3,0,this.countOthers)
            
         }
         
    }

  }
</script>
<style>
</style>