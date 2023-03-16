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
        padding: 100px 60px;
        width: 90%;
        display: grid;
        grid-template-columns: 1fr 3fr ;

        
        &--profile{
            background-color: $light-gray;
            max-height: 600px;
            border-radius: 4px;
        }
    
    }
</style>T