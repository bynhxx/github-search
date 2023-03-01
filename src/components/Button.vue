<template>
    <button class="outlined">{{content}}</button>
</template>

<script>
export default {
    props: {
        content: {
            type: String, 
            default: 'Button'
        }, 
        style: {
            type: String  /* receberá outlined ou filled, alterar a classe dinamicamente de acordo com o valor da prop */
        }
    }
}
</script>

<style lang="scss" scoped>

    button{
        padding: 6px 16px;
        border-radius: 4px;
        margin-top: 16px;
        cursor: pointer;
    }

    .filled{
        background-color: $black; 
        color: $white; 
        
    }

    .outlined{
        border: 2px solid $black; 
        background-color: $white;
    }

</style>