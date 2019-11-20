<template>
    <div class="next">


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



                       <div class="container">
                   <div class="card">
                    <div class="card-header">BUSINESS DETAILS</div>
                    <div class="card-body">
                         <form @submit.prevent="">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="name" placeholder="Name" v-model="name">
                                    </div>
                                    <div class="form-group">
                                        <input type="Address" class="form-control" id="email" placeholder="Address" v-model="Address">

                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="phone" placeholder="Phone Number" v-model="phone">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="state" placeholder="State" v-model="state">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="country" placeholder="Country" v-model="country">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="nostaff" placeholder="No of Staff" v-model="staff">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="workDays" placeholder="No of Working Days" v-model="workdays">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="workweek" placeholder="Work Week" v-model="workweek">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control me" id="pwd" placeholder="Password" v-model="password">
                                    </div>
                                    <div class="form-group form-check">
                                        <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox">Set as Default Business
                                        </label>
                                    </div>
                                    <p class="red-text">{{feedback}}</p>
                                    <button type="submit" class="btn">Subscribe using Paystack at 300NGN</button>
                                    </form>

                    </div>
                   </div>
                    </div>


    </div>
</template>

<script>
export default {
    Name:'Next',
    data(){
        return {

        }
    }
}
</script>

<style>
.navbar-brand{
  color: #5cd65c;
  font-family: 'Pacifico', cursive;
  font-size:40px;
  
}
.card{
    width: 1000px;
    height:700px;
     margin-top:80px;
     color:#5cd65c;
     font-family: 'Dosis', sans-serif;
     border-radius: 30px;
}
.card-header{
    border-radius: 30px;
}
.btn{
    background-color:#5cd65c;
    margin-top:20px;
    position:absolute;
    left:30px;
}

</style>