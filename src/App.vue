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

//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 tooken
</script>


<style lang="scss">
#app{
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.95)), url('@/assets/img/bg.jpg');
  background-position: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  height: auto;
  overflow-y: scroll;
}

::-webkit-scrollbar{
  width: 12px;
  background-color: $dark-gray;
}

::-webkit-scrollbar-thumb{
  width: 12px;
  background-color: $dark-gray-2;
  border-radius: 8px;
}

</style>

