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
    padding: 10px 20px; 
    width: 80%;
    max-width: 600px;
    border: 2px solid $black; 
    border-radius: 4px;
    transition : .2s;
    margin-top: 12px;

    &:focus{
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.151);
    }
}

</style>