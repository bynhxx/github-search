<template>
  <Nav />
  <router-view/>
</template>

<script>

import Nav from '@/components/Nav.vue'; 

export default {
  
  components: {
    Nav
  }
}


</script>


<style lang="scss">
  @import '@/assets/sass/main.scss';

* { 
  margin: 0; 
  box-sizing: border-box; 
  padding: 0; 
}



</style>
