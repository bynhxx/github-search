<template>
  <router-view></router-view>
  <div class='users-container'>
    <UserItem />
    <user-item> </user-item>
    <button class="primaryButton">teste</button>
  </div>  

      

</template>

<script>

import UserItem from '@/components/UserItem.vue'



export default {
  components: { 
    UserItem, 
    }
}
</script>

<style lang="scss" scoped>

  .users-container{
    display: flex;
    flex-direction: column;
    padding-top: 80px;
  }

  button{
    align-self: center;
    margin-top: 200px;
  }

</style>T