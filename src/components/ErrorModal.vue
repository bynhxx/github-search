<template> 
    <div class="modal-container">
        <div class="modal-container__modal">
        <img src="@/assets/icons/alert.svg" alt="">
        <p>
        Desculpe! <br> 
        Não foi possível encontrar o usuário. <br> 
        Tente novamente. 
        </p>
        <button @click="toggleVisibility" class="primaryButton"> Tente novamente </button>
    </div>
</div> 
</template>

<script>
    export default {
        props: ['isModalVisible'],
        methods: {
            toggleVisibility(){
                this.$emit('toggleModal')
            }
        }

    }


</script>

<style  lang="scss" scoped>
.modal-container{
    background-color: rgba(14, 14, 14, 0.897);
    height: 100vh;
    width: 100%;
    z-index: 200;
    top:0; 
    position: fixed; 
    display: flex;
    justify-content: center;
    align-items: center;

    &__modal{
        @include card; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img{
        width: 44px;
        margin-bottom: 32px;
        }


        p {
        text-align: center;
        line-height: 32px;
        margin-bottom: 16px;
        }
    }

}
</style>