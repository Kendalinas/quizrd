<template>
  <div id="app">
    <div class="right-align login">
      <b-form inline>
        <label class="sr-only" for="inlineFormInputName2">User Name</label>
        <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="User Name"/>

        <label class="sr-only" for="inlineFormInputGroupUsername2">Password</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input id="inlineFormInputGroupUsername2" placeholder="Password"/>
        </b-input-group>

        <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>

        <b-button variant="primary">Login</b-button>
      </b-form>
    </div>
    <h1 class="brand"><a  href="">Quizr</a></h1>

    <!-- <p>
      <i class="fas fa-check"></i>
      <i class="fas fa-times"></i>
    </p> -->

    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: Barlow;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #0d0d0e;
  background-color: rgb(190, 15, 15);
}
h1 {
  color: white;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 20px;
}

.right-align {
  display: flex;
  justify-content: flex-end;
}
.login {
  padding: 5px;
}
.fa-check {
  color: green;
}
.fa-times {
  color: lightre;
}
.brand a, .brand a:hover{
  text-decoration: none; 
  color: white;
}
</style>
