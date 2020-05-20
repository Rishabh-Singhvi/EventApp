<template>
    <div style="min-height: 900px;min-width: 900px; background-image: url(img/theme/41.jpg); background-size: cover; background-position: center top;" >

      <br>
      <br>
      <br>
      <br>
     <template>
  <section>
    
    <div class="mb-5">
      <mdb-row class="mb-4">
            <mdb-col>  
                   

                    
                  
                    <div style="min-height: 450px;min-width: 400px; background-image: url(img/theme/44.jpg); background-size: cover; background-position: center top;margin-right:20px;margin-left:20px ;" class="rounded square">
                    
                    </div>  
                  <br>
            </mdb-col>
            <mdb-col>  
                 <hr />
                <div style="min-height: 700px;min-width: 850px; background-size: cover; background-position: center top;margin-right:20px;margin-left:20px;border-left:1px solid #5E321F;border-right:1px solid #5E321F;border-bottom:1px solid #5E321F;padding:17px;background-image: url(img/theme/15.jpg)"  class="rounded square">
                <div style="min-height: 250px;min-width: 850px; background-size: cover; background-position: center top;" >
                    <mdb-row class="mb-4">
                           <mdb-col>    
                               <div style="min-height: 850px;min-width: 400px; background-image: url(img/theme/furn.jpg); background-size: cover; background-position: center top;margin-right:20px;margin-left:10px ;" class="rounded square"></div>
                           </mdb-col>

                           <br>
                           <br>
                           <br>
                           <br>
                              


                           <mdb-col>  
                             <mdb-row class="mb-4">
                                 <mdb-col>    
                                    <div class="row justify-content-center" >
                                      
                                        <div class="col-lg-3 order-lg-2">
                                          
                                            <div class="card-profile-image">                                                
                                                    <img src="img/theme/www.jpg" class="rounded-circle"  style="margin-top:30px;height:105px">
                                                      <hr>                                              
                                            </div>
                                            
                                        </div>
                                        
                                   </div>
                                </mdb-col>                                                             
                            </mdb-row>  

                            
                            <br>
                            <br>
                            <br>

                         <div style="min-height: 200px;min-width: 600px">
                             <h1 style="color:#5E321F;border-bottom:2px solid #5E321F">About Us</h1>
                            <h2 style="color:#492000;">Ions Event Creations help you to create your own events . With us you can register your events and as admin. As a user 
                            you can see the details of the ongoing events and can register for the same. 
                           </h2>
                         </div>


                           


                      <mdb-row>
                        <mdb-col>    
                                           <h1 style="color:#5E321F;border-bottom:0.5px solid #5E321F">Contact</h1>
                                           <h2 style="color:#492000">Rishabh : rishabh@gmail.com</h2>
                                           <h2 style="color:#492000">Shubham : shubham@gmail.com</h2>
                        </mdb-col>    
                       </mdb-row>

                         <br><br>
                       <mdb-row>
                        <mdb-col>    
                                           <h1 style="color:#5E321F;border-bottom:0.5px solid #5E321F">Bio</h1>
                                           <h2 style="color:#492000">Rishabh details</h2>
                                           <h2 style="color:#492000">Shubham  details</h2>
                        </mdb-col>    
                       </mdb-row>
                          
                          
                           <br><br>
                        <mdb-row>
                        <mdb-col>    
                                   <h1 style="color:#5E321F;border-bottom:0.5px solid #5E321F">Feedback</h1>
                                    <h3  style="color:#492000">Your valuable feedback will help us a lot to improve our app.Mail us at abc@gmail.com</h3>         
                        </mdb-col>    
                       </mdb-row>     
                       
                                   
        

                            
                           </mdb-col>


                        
                    </mdb-row>    
                </div>
                </div>
           </mdb-col>       
      </mdb-row>
      
    </div>
  </section>
        </template>
    <br>
    
  <mdb-footer color="stylish-color-dark" class="page-footer font-small pt-4 mt-4">
    <mdb-container class="text-left">
     
       
        
        
    
    
    </mdb-container>
   
    <!-- <div class="text-center py-3">
      <ul class="list-unstyled list-inline mb-0">
        <li class="list-inline-item">
         
        </li>
        <li class="list-inline-item"><a href="#" class="btn btn-default btn-rounded">Sign up!</a></li>
      </ul>
    </div> -->
    <div class="text-center py-3">
      <ul class="list-unstyled list-inline mb-0">
        <li class="list-inline-item">
         
        </li>
        <li class="list-inline-item" v-if="!uid"><a href="#" class="btn  btn-rounded" style="background-color:#5E321F;color:white">Get Started</a></li>
      </ul>
    </div>
   

   
    <div class="text-center">
      <ul class="list-unstyled list-inline">
        <li class="list-inline-item"><a class="btn-floating  btn-fb mx-1"><i class="fab fa-facebook" style="color:#5E321F"> </i></a></li>
        <li class="list-inline-item"><a class="btn-floating  btn-tw mx-1"><i class="fab fa-twitter" style="color:#5E321F"> </i></a></li>
        <li class="list-inline-item"><a class="btn-floating  btn-gplus mx-1"><i class="fab fa-google-plus" style="color:#5E321F"> </i></a></li>
        <li class="list-inline-item"><a class="btn-floating  btn-li mx-1"><i class="fab fa-linkedin-in" style="color:#5E321F"> </i></a></li>
      
      </ul>
    </div>
    <div class="footer-copyright text-center py-3">
     
    </div>
  





  </mdb-footer>


    </div>
</template>


<script>
  import { mdbRow, mdbCol, animateOnScroll } from 'mdbvue';
  export default {
    name: 'AnimationsPage',
    components: {
      mdbRow,
      mdbCol,
    },
    directives: {
      animateOnScroll
    },
     data() {
      return {        
          uid:'',     
      }
     },
       beforeMount(){
       
        this.uid = localStorage.getItem('uid')
    }
  }
</script>



<style scoped>


</style>