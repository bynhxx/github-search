<template>
    <div>
        <img src="@/assets/icons/octocat.svg">
        GitHub <span> Search</span>
    </div>
</template>

<script>
export default {
    name: "Logo"
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/main.scss';

div{
    display: flex;
    align-items: center;
    font-family:'Rubik', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    span{
        font-style: italic;
        font-weight: 200;
    }
}
img{
    width: 45px;
}

</style>