<template>
    <div class="pageTitle">
        <img src="@/assets/icons/octocat.svg" alt="">
        <h1>Repositórios Favoritos</h1>
    </div>
</template>

<script>
export default {
    name: 'PageTitle'
}
</script>

<style lang='scss' scoped>
    .pageTitle{
        display: flex;
        align-items: center;
        
        margin-top: 80px;
        margin-bottom: 24px;

        img{
            width: 50px;
        }
    }
</style>