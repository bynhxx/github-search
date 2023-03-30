<template>
    <div class="repo">
        <div class="repo-title">
            <h3>
                {{name}}
            </h3>
            <img src="@/assets/icons/star.svg" alt="">
        </div>
            
        <p> {{ description }}</p>
        <span>
            <img src="@/assets/icons/star.svg" alt=""> 
            {{stars}}
        </span>
    </div>
</template>

<script>
export default {
    name: 'Repository', 
    props: ['name', 'description', 'stars', 'id']
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
            margin-top: 12px;
            img{
                margin-right: 2px;
                width: 16px;
            }
        }

        hr{
            margin-top: 32px;
        }
    }


</style>