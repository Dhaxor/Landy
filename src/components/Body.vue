<template>
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
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name:'Body',
    data () {
     
    }
}
</script>

<style>
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


</style>