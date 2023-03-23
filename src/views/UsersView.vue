<template>
  <router-view></router-view>
  <div class='users-container'>
    <UserItem v-for="user in users" 
      :key="user.login" 
      :name="user.login"
      :avatarURL="user.avatar_url"
      />
      <button @click="loadUsers" class="primaryButton">Mostrar Mais</button>
    </div>  
    
      

</template>

<script>
import UserItem from '@/components/UserItem.vue'

export default {
  components: { 
      UserItem, 
    },
    data(){
      return{
        page: 1, 
        users: []
      }
    },
    methods: {
      loadUsers(){
        this.page++
        console.log(this.page)
        this.fetchUsers()
      }, 
      fetchUsers(){
        const name = this.$route.params.name
        fetch(`https://api.github.com/search/users?q=${name}&page=${this.page}`)
          .then(res => res.json())
          .then(res => { 
            res.items.forEach(item => this.users.push(item))
            //console.log(this.users)
          })
        }
    },
    created(){
      this.fetchUsers()
    } 
}
</script>

<style lang="scss" scoped>
  .users-container{
    display: flex;
    flex-direction: column;
    padding: 80px 0;
    height: 100vh;
    //overflow-y: scroll;
  }

  button{
    align-self: center;
    margin: 200px;
  }

</style>