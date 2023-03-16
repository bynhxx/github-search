<template>
    <div>
        <UserPicture />
        <span> </span>  
        Fulano De Talzin

    </div>
    
</template>

<script>
import UserPicture from './UserPicture.vue'

export default {
    name: 'UserItem', 
    components: {
        UserPicture
    }

}
</script>

<style lang='scss' scoped>
    div{
        border: 1px solid $black; 
        border-radius: 4px;
        padding: 16px; 
        width: 80%;
        margin-top: 16px;
        display: flex;
        align-self: center;
        transition: .1s;
        cursor: pointer;

        &:hover{
            box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.151);
        }

        span{
            margin-left: 16px;
        }
    }
</style>