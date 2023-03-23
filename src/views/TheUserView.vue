<template>
    <div class="container">
        <div class="user">  
            <div class="user--profile">
                <UserPicture /> 
            </div>
            <div class="user--repos">
                <Repository /> 
                <Repository /> 
            </div>
        </div>
    </div>

</template>



<script>
import Repository from '@/components/Repository.vue'
import UserPicture from '@/components/UserPicture.vue'

export default {
    components: {
        Repository,
        UserPicture
    }
}
</script>

<style lang="scss" scoped>

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .user{
        padding: 100px 40px;
        width: 100%;
        max-width: 1200px;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 3fr ;
        gap: 20px;

        
        &--profile{
            @include glass-effect;
            max-height: 600px;
            max-width: 220px;
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px
        }
    
    }
</style>T