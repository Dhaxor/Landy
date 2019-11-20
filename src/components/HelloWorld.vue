<template>
  <div class="hello">

    <div class="container-fluid the-nav">
      <div class="row">
        <div class="col-sm-12">
   <nav class="navbar navbar-expand-sm bg-light">

  <!-- Links -->
  <a class="navbar-brand" href="#">Website Hero</a>
  <ul class="navbar-nav">
    <!-- <li class="nav-item">
      <a class="nav-link" href="#">Link 1</a>
    </li> -->
  </ul>

</nav>
</div>
</div>
</div>




<!-- Body -->

<div class="bd">
       
       <div class="container-fluid">
       <div class="row">
       <div class="col-sm-12">




                   <h2>
                       <span class="primary">SIMPLIFY PAYROLL </span> 
                        <span class="Secondary">With software and services designed for your business</span>
                        <span class="senior-secondary">Join more than 100,000 small businesses and their teams.</span>

                        </h2>

                     <div class="card">
                    <div class="card-header">All you need to do is complete the form below.</div>
                    <div class="card-body">
                         <form @submit.prevent="signup">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="name" placeholder="Name" v-model="name">
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email" placeholder="Email Address" v-model="email">

                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="phone" placeholder="Phone Number" v-model="phone">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control me" id="pwd" placeholder="Password" v-model="password">
                                    </div>
                                    <div class="form-group form-check">
                                        <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox"> Remember me
                                        </label>
                                    </div>
                                    <p class="red-text">{{feedback}}</p>
                                    <button type="submit" class="btn">Submit</button>
                                    </form>

                    </div>
                   
                    </div>

                        

       </div>
   </div>
</div>



    </div>


<!-- Content -->


<div class="content">
         
         <div class="container-fluid">
         <div class="row">
         <div class="col-sm-12">
          <div class="the-theme">
                      
                      
                <p class="text-center">Technology alone is not enough
                You need technology plus expertise, at every level and at every stage, to keep your human
                resources software modern and adaptable. You need expertise before you make a purchase
                when you’re working to identify the right HR solution for your business. You need expertise
                throughout implementation. And you need ongoing support, not impersonal, 1-800 number call
                centres. To succeed, you need a dedicated team of experts that not only understands HR
                software but are also intimately familiar with your business.</p>
         </div>

         </div>

         </div>

                    <div class="mywork features bg-light">
                    <div class="row">
                        <div class="col-sm-3 col-md-6 mt-5">
                                <p class="top">Automated taxes</p>
All local, state and federal payroll taxes are calculated, filed, and paid automatically.

                            </div>
                            


                                
                        <div class="col-sm-3 col-md-6 mt-5">
                                <p class="top">Payroll on AutoRun</p>
You can set payroll to run automatically each pay period. Nice!

                            </div>
                            


                        <div class="col-sm-3 col-md-6 mt-5">
                                    <p class="top">Flexible payment schedules</p>
Pay your team weekly, bi-weekly, twice a month, or monthly.

                            </div>
                            

                        <div class="col-sm-3 col-md-6 mt-5">
                                    <p class="top">Accounting integrations</p>
Gusto integrates with QuickBooks, Xero, and FreshBooks.

                            </div>
                            
                        <div class="col-sm-3 col-md-6 mt-5">
                                    <p class="top">Payroll reports</p>
Generate and download reports for payroll history, bank transactions, contractor payments, paid
time off, tax payments, and more.

                            </div>
                            
                        <div class="col-sm-3 col-md-6 mt-5">
                                    <p class="top">Direct deposit</p>
Your employees’ paychecks go straight to their bank accounts.

                            </div>
                            
                        <div class="col-sm-3 col-md-6 mt-5">
                                    <p class="top">No payroll setup fees</p>
Our easy-to-use software and helpful support team are here to help you get started.

                            </div>
                            
                        <div class="col-sm-3 col-md-6 mt-5">
                                    <p class="top">Mobile</p>
Access your account and run payroll any time on your smartphone or tablet.

                            </div>
                            


                        
                        <div class="col-sm-3 col-md-6 mt-5">
                              <p class="top">Unlimited payrolls</p>
Run payroll as many times as you need.

                            </div>
                            </div>





</div>

<footer class="page-footer font-small">

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2018 Copyright:
  </div>
  <!-- Copyright -->

</footer>



         </div>

         </div>

















  </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
  Name: 'HelloWorld',
  data () {
     return {
            name:null,
            phone:null,
            email:null,
            password:null,
            feedback:null
      }
    },
    methods:{
                signup(){
                    if(this.name && this.email && this.phone && this.password ){
                        
                       let ref = db.collection('users').doc(this.name)
                       ref.get().then(doc =>{
                           if(doc.exist){
                               this.feedback = 'This name already exist'
                           }else{
                               firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                                .then(()=>{
                                    this.$router.push({name: 'Next'})
                                })
                                .catch(err =>{
                                    console.log(err)
                                })

                           }
                       })
                    }
                }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.navbar-brand{
  color: #5cd65c;
  font-family: 'Pacifico', cursive;
  font-size:40px;
  
}
.bd{
    height: 95vh;
    background-image:linear-gradient(to right bottom,
     rgb(194, 240, 194)
     ,rgba(91, 215, 91,0.8)),
     url(mypic.jpg);
    background-size: cover;
    position: relative;
    clip-path:polygon(1% 0, 99% 0, 100% 30%, 100% 70%, 73% 85%, 28% 86%, 0% 70%, 0% 30%);
}
.card{
    width: 500px;
    height:400px;
    position: absolute;
    left: 70%;
     margin-top:80px;
     color:#5cd65c;
     font-family: 'Dosis', sans-serif;
}
.btn{
    background-color:#5cd65c;
    margin-top:20px;
    position:absolute;
    left:30px;
}
/* .form-control{
    margin-top:20px;
} */
/* .me{
   margin-top:45px; 
} */


.primary{
   position:relative;
   top:200px;
   left:410px;
   font-size:50px;
   font-family: 'Pacifico', cursive;
}
.Secondary{
   position:absolute;
   top:270px;
   left:310px;
   font-family: 'Source Sans Pro', sans-serif;
    
}
.senior-secondary{
   position:absolute;
   top:320px;
   left:460px;
   font-size:22px;
   font-family: 'Source Sans Pro', sans-serif;
}

.the-theme{
    font-size:20px;
    font-family: 'Montserrat', sans-serif;
    margin-bottom:100px;
    

    /* text-align: center; */
}
.features{
    height:950px;
    font-size:25px;
}
.top{
    font-size:30px;
   font-family: 'Permanent Marker', cursive;
   background: -webkit-linear-gradient(rgb(194, 240, 194)
     ,rgb(91, 215, 91));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.text-center{
    margin-left: 100px;
    margin-right: 100px;
}
.page-footer{
    background-color:rgb(91, 215, 91);
}





/* polygon(0 0, 99% 0, 100% 30%, 100% 70%, 73% 85%, 28% 86%, 0% 70%, 0% 30%); */
</style>
