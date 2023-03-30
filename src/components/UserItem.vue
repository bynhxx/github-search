<template>
    <div @click="navigateToUser" >
        <UserPicture :url="avatarURL" />
        <span> {{name}} </span>  
    </div>
    
</template>

<script>
import UserPicture from './UserPicture.vue'

export default {
    name: 'UserItem', 
    props: ['name', 'avatarURL'],
    components: {
        UserPicture
    }, 
    methods: {
        navigateToUser(){
            console.log(this.name)
            this.$router.push(`/user/${this.name}`)
        }
    }

}
</script>

<style lang='scss' scoped>
    div{
        border: 1px solid $black;
        color: white;  
        border-radius: 4px;
        padding: 16px; 
        width: 80%;
        margin-top: 16px;
        display: flex;
        align-self: center;
        transition: .1s;
        cursor: pointer;

        @include glass-effect;
        /* transformar em mixin dpois */

        &:hover{
            box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.151);
        }

        span{
            margin-left: 16px;
        }
    }
</style>