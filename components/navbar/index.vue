<template>
    
    <section class="navbar">
      <div class="top">
        <h1>Main</h1>
      </div>
      <NuxtLink to="/test">test api </NuxtLink>
 
      
       
          <li> <router-link to="pages/into.vue">About Us</router-link></li>
          <li> <router-link to="components/test/index.vue">Services</router-link></li>
          <li> <router-link to="components/test/index.vue">Team</router-link></li>
          
        
   </section>

</template>

<script>
    export default {
        name:'IndexNavbar',
    }
</script>

<style lang="scss" scoped>

  .navbar{
  display: flex;
  margin: 0;
  justify-content: space-between;
  background-color: white;
  padding: 1rem;
  max-width: 100%;
  height: 80px;
  align-items: center;

  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.2)
}
.top{
  width: 20%;
  display: flex;
  justify-content: center;

  
}
.menu{
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;

}
.menu li{
  margin: 0 1rem;
 
}


li a {
  display: block;
  color: rgb(0, 0, 0);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #d8d8d8;
}
</style>








