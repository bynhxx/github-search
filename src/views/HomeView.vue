<template>
  <div class="container">
    <img src="@/assets/icons/octocat.svg" alt="">

    <div class="button-group">
      <Button content="Repositório"/> <Button content="usuário"/>
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
    Button, Input
  },
  data(){
    
  },
  computed: {

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

  img{
    width: 200px;
  }

}



</style>