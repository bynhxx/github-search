<template>
  <div class="container">
    <img src="@/assets/icons/octocat.svg" alt="">

    <div class="button-group">
<!-- 
      <Button :class="{active: typeOfSearch === 'repo'}" isActive="false" @click="searchForRepos" content="Repositório" /> 


      <Button :class="{active: typeOfSearch === 'user'}" isActive="false" @click="searchForUsers" content="Usuário" />
 -->

      <Button :state="{active: typeOfSearch === 'repo'}" @click="searchForRepos" content="Repositório" /> 


      <Button :state="{active: typeOfSearch === 'user'}" @click="searchForUsers" content="Usuário" />

    </div>
    <Input />
    

    
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'

export default {
  name: 'HomeView',
  components: {
    Button, 
    Input
  },
  data(){
    return {
      typeOfSearch: 'repo'
    }
  },
  methods: {
    searchForRepos(){
      this.typeOfSearch = 'repo'
      console.log(this.typeOfSearch)      
    },
    searchForUsers(){
      this.typeOfSearch = 'user'
      console.log(this.typeOfSearch)
    }
  }
}

</script>

<style lang="scss" scoped>

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img{
    width: 200px;
  }

  .button-group{
    display: flex; 
    gap: 8px
  }

}


</style>

