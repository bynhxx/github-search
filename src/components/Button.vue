<template>
    <button 
        :class="{active: state.active === true}"
        class="outlined">
        {{content}}
    </button>

</template>

<script>
export default {
    props: {
        content: {
            type: String, 
            default: 'Button'
        }, 
        state: {
            type: Object
        }, 
    }, 
}
</script>

<style lang="scss" scoped>

    button{
        padding: 6px 16px;
        border-radius: 4px;
        margin-top: 16px;
        cursor: pointer;
        transition: .2s;
    }

    .outlined{
        border: 2px solid $black; 
        background-color: $white;
    }

    .active {
        background-color: $black;
        color: $white;
    }

</style>
