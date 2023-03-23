<template>
    <div class="container">
        <Repository/>
        <Repository/>
        <button class="primaryButton">Ver Mais</button>
    </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import Repository from '@/components/Repository.vue'

export default {
    name: 'FavoriteRepos',
    components: {
        PageTitle, 
        Repository
    }
}
</script>

<style lang="scss" scoped>
    
    .container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: 80px 20px;
        //background-color: red;

        button{
            align-self: center;
            margin-bottom: 30px;
        }
    }

</style>  