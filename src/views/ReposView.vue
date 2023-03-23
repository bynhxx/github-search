<template>
<router-view></router-view>
<div class='repos-container'>   
    <Repository />

    <button class="primaryButton">Mostrar Mais</button>
</div>  

    

</template>

<script>
import Repository from '@/components/Repository.vue'


export default {
components: { 
        Repository
    }, 

}
</script>

<style lang="scss" scoped>

.repos-container{
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    height: 100vh;
    
}

button{
    align-self: center;
    margin-top: 200px;
}

</style>