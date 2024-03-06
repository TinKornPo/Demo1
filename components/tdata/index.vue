<template>
<v-col cols="12" md="12">
  <div>
    
  <div v-for="item in Profile" :key="item.id">
    <h1>{{ item.fName }}</h1>  
  </div>
 
</div>
 </v-col>
</template>

<script>
  export default {
    name:'IndexTdata',  

    data(){
      return{
        Profile: [
        {
          id: 1,
          fName: 'ทินกร',
          lName: 'โพธิโสภา',
          Age: '23',
          phone: '061-983-7110',
          

        },
         {
          id: 2,
          fName: 'นายวรัท',
          lName: 'มาลี',
          Age: '23',
          phone: '095-759-1889',
        }
      ]
      }
    }
  }
</script>

<style lang="scss" scoped>
div {
  border: solid black 1px;
  padding: 10px;
  max-width: 350px;
  margin-top: 20px;
}
</style>