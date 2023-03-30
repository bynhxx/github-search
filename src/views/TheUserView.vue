<template>
    <div class="container">
        <div class="user">  
            <LoadingSpinner v-if="isUserProfileLoading"/>
            <div v-else class="user--profile">
                <UserPicture :url="userData.avatar" /> 
                <p><span>Nome: </span> {{ userData.name }}</p>
                <p><span>Login: </span> {{ userData.login }} </p>
                <p><span>Trabalho: </span> {{ userData.company }} </p>
                <p><span>Bio: </span> {{ userData.bio }}</p>
                <p><span>Repositórios: </span>{{ userData.repos }} </p>
            </div>

            <div class="user--repos">
                <LoadingSpinner v-if="isUserReposLoading"/>
                <Repository v-else
                    v-for="repo in repos" :key="repo.id"
                    :name="repo.name"
                    :description="repo.description"
                    :stars="repo.stars"
                    :id="repo.id"
                />
            </div>
        </div>
    </div>
    <div>
    </div>

</template>



<script>
import Repository from '@/components/Repository.vue'
import UserPicture from '@/components/UserPicture.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

export default {
    components: {
        Repository,
        UserPicture, 
        LoadingSpinner
    }, 
    data(){
        return{
            userData: null, 
            isUserProfileLoading: true,
            isUserReposLoading: true,
            user: null, 
            repos: [],
            isLoading: true
        }
    },
    methods: {
        fetchUserProfile(){
            this.user = this.$route.params.user 
            fetch(`https://api.github.com/users/${this.user}`, {
                headers: {
                    Authorization: 'Baerer + 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'
                }
            })
            .then(res => res.json())
            .then(res => {
                this.userData = {
                    login: res.login, 
                    name: res.name,
                    company: res.company,
                    bio: res.bio, 
                    avatar: res.avatar_url, 
                    repos: res.public_repos, 
                }
                this.isUserProfileLoading = false
            })
        },
        fetchUserRepos(){
            fetch(` https://api.github.com/users/${this.user}/repos`)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    res.forEach(item => {
                        this.repos.push(
                            {
                                name: item.name, 
                                description: item.description, 
                                stars: item.stargazers_count,
                                id: item.id
                            }
                        )
                    })
                    this.isUserReposLoading = false
                })
        }
    },
    created(){
        this.fetchUserProfile(),
        this.fetchUserRepos()
    }
    
} 
</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;

        h1{
            color: white;
            margin-top: 300px;
        }
    }
    .user{
        padding: 100px 40px;
        width: 100%;
        max-width: 1200px;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 3fr ;
        gap: 20px;

        
        &--profile{
            @include glass-effect;
            max-height: 600px;
            max-width: 220px;
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 20px; 
            color: white;

            p{
                font-weight: 300;
                letter-spacing: 1px;
                font-size: 0.95rem;
                margin-top: 8px;

                &:first-of-type{
                    margin-top: 24px;
                }

            }

            span{
                font-weight: bold;
            }
        }

    }
    button{
        align-self: center;
        margin: 200px;
    }
</style>