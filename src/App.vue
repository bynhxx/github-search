<template>
  <TheNav/>
  <router-view/>
</template>

<script>

import TheNav from '@/components/TheNav.vue'; 

export default {
  
  components: {
    TheNav
  }
}


</script>


<style lang="scss">
#app{
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.95)), url('@/assets/img/bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

</style>
