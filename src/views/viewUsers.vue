<template>
<div>
  <div v-if="!pageLoaded">
            <loading :active.sync="isLoading" 
                :can-cancel="true" 
                :on-cancel="onCancel"
                :is-full-page="fullPage"></loading>
  </div>       
    <div v-if="pageLoaded" style="min-height: 1000px;min-width: 900px; background-image: url(img/theme/65.jpg); background-size: cover; background-position: center top;" >
       
            <!-- Card stats -->
        <div class="row" style="padding-top:100px;padding-left:25px;padding-right:20px">
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
        <base-button  type="default" v-if="modals.modal1==false" @click="showChart" style="margin-left:10px">View Chart</base-button>
        <base-button  type="default" v-else disabled >View Chart</base-button>
        <base-button  type="default" v-if="modals.modal1==true" @click="hideChart"  style="margin-left:10px">Hide Chart</base-button>
        <base-button  type="default" v-else disabled >Hide Chart</base-button>
      

    </div>
</div>  
</template>
<script>
import * as chartConfigs from '@/components/Charts/config';
import Loading from 'vue-loading-overlay';
import BarChart from '@/components/Charts/BarChart';
import firebase from '@/firebase_init.js';
let db = firebase.firestore();

  export default {
    name: 'projects-table',
    components: {
      Loading,
      BarChart
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
        isLoading:false,
        pageLoaded:false, 
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
      }
    },
    beforeMount(){
      this.isLoading=true
      this.pageLoaded=false
        let eventID=this.$route.params.eventID
        db.collection('AllEvents').get().then(snapshot=>{
            snapshot.forEach(doc => {
                if(doc.id==eventID){
                    this.tableData=doc.data().registeredUsers
                    this.eveid=doc.id
                }
            })
        }).then(()=>{
          this.pageLoaded=true
          this.isLoading=false
        })
        

    },
    methods:{
         showChart(){
           this.modals.modal1=true
          this.tableData.forEach(ele=>{
            if(ele.regType=='Self'){
               this.countSelf++
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