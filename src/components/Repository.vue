<template>
    <div class="repo">
        <div class="repo-title">
            <h3>
                Angular Admin Bla bla
            </h3>
            <img src="@/assets/icons/star.svg" alt="">
        </div>
            
        <p>
            Ea tempor minim proident quis aliqua ad irure occaecat. Excepteur non velit commodo consequat et sunt duis aliquip nostrud non aliquip duis consectetur. Laborum occaecat enim culpa laborum culpa cupidatat voluptate ex duis tempor pariatur Lorem eu. Officia voluptate et commodo consequat incididunt proident ut irure irure mollit.
        </p>
        <span>
            <img src="@/assets/icons/star.svg" alt=""> 500
        </span>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'Repository'
}
</script>

<style lang="scss" scoped>

    .repo {
        width: 90%;
        max-width: 1200px;
        padding: 20px;
        align-self: center;
        margin-bottom: 20px;
        background-color: rgba(255, 255, 255, 0.842);
        border-radius: 4px;

        .repo-title{
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;

        }

        span{
            display: flex;
            align-items: center;
            margin: 16px 0;
            img{
                margin-right: 8px;
                width: 16px;
            }
        }

        hr{
            margin-top: 32px;
        }
    }


</style>