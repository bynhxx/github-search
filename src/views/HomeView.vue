<template> 
  <ErrorModal v-if="isModalVisible" @toggleModal="toggleModalVisibility"/>

  <div class="container">
    <img src="@/assets/icons/octocat.svg" alt="">
    <div class="button-group">
      <Button :state="{active: typeOfSearch === 'repo'}" @click="searchForRepos" content="Repositório" /> 
      <Button :state="{active: typeOfSearch === 'user'}" @click="searchForUsers" content="Usuário" />
    </div>
    
    <input v-model="searchTo" type="text" name="" id="" placeholder="Buscar">
    {{ searchTo }}
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import ErrorModal from '@/components/ErrorModal.vue'

export default {
  name: 'HomeView',
  components: {
    Button, 
    Input,
    ErrorModal
  },
  data(){
    return {
      typeOfSearch: "Buscar", 
      isModalVisible: false, 
      searchTo: null
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
      if(this.searchTo){
        console.log(this.searchTo) 
        this.$router.push(`/users/${this.searchTo}`)
      }


    }, 
    toggleModalVisibility(){
      this.isModalVisible = !this.isModalVisible
    }
  }, 
  computed: {
    inputPlaceholder(){
      return this.typeOfSearch === "repo" ? "Buscar repositório" : "Buscar usuário"
    } 
  }, 
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
  z-index: 2;
  

  img{
    width: 200px;
  }

  .button-group{
    display: flex; 
    gap: 8px
  }

  input{
    @include input()
  }

}
</style>

