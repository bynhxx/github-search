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
        padding: 8px 24px;
        border-radius: 4px;
        margin-top: 16px;
        cursor: pointer;
        transition: .2s;
        font-size: 0.9rem;
    }

    .outlined{
        border: 1px solid rgb(73, 73, 73);
        background-color: transparent;
        color: rgb(114, 114, 114)
    }

    .active {
        background-color: white; 
        color: black; 
        font-weight: bold;
        border: none; 
    }

</style>
