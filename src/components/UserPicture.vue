<template>
    <img :src="url" alt="">
</template>

<script>
export default {
    name: 'UserPicture', 
    props: ['url']
}
</script>

<style lang="scss" scoped>
    img{
        width: 180px; 
        border-radius: 4px;
    }
</style>