<template>
  <div>
    <v-col sm="12" ms="12" justify="space-around">
      <v-date-picker v-model="picker" color="green lighten"></v-date-picker>
    </v-col>
  </div>
</template>

<script>
export default {
  name: 'IndexTestdata',

  data() {
    return {
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
