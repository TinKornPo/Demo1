<template>
  <div>
  
    <ul>
     
      <li v-for="item in listBanner" :key="`${item.id}-${item.title}`"></li>

    </ul>
  </div>
</template>

<script>
import bannerApi from '@/api/bannerApi'
  export default {
    name:'IndexPage',
    data(){
      return {
       listBanner: [],
      }
    },
      mounted() { 
        this.getDataBanner()
      },
        methods: {
          async getDataBanner() {
            try{
                const data = await bannerApi.getAllBanner()
                console.log(data)
            }catch (error){}
          },
        },
      }
    
  

</script>

<style lang="scss" scoped>
</style>
