<template>
    <input type="text" name="" id="" placeholder="Buscar Repo | User">
</template>

<script>
export default {
    name: 'Input'
}
</script>

<style lang="scss" scoped>

input {
    padding: 16px 24px; 
    width: 80%;
    max-width: 600px;
    border-radius: 8px;
    transition : .2s;
    margin-top: 24px;
    color: rgb(199, 199, 199);

    background: rgba(255, 255, 255, 0.09);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.08);

    &:focus{
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.4);
        outline: none;
        //transform: scale(1.01);
        padding: 20px 24px; 
        max-width: 650px;
        font-size: 0.9rem;
        color: white;
    }
}



</style>