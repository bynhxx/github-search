<template>
    <div>
        <h1>Página não encontrada! 404</h1>
    </div>


</template>

<script>

    export default {
        name: "NotFound"
    }
</script>

<style lang="scss" scoped>

div{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    h1{
        background-color: rgba(0, 0, 0, 0.651);
        padding: 16px 32px; 
        border-radius: 4px;
        font-weight: 500;
        letter-spacing: 1px;
    }
}

</style>