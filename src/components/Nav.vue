<template>
    <nav>
        <Logo/>
        <div>
            <router-link to="/">Início</router-link> |
            <router-link to="/favorite">Favoritos</router-link>
        </div>
    </nav>
</template>

<script>
import Logo from '@/components/Logo.vue'; 
export default {
    name: 'Nav', 
    components: {
        Logo
    }
}
</script>

<style lang="scss">


nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $light-gray;
    padding: 12px;
    position: fixed;
    width: 100%;

    div{
        font-family: 'Rubik', sans-serif;
        
        a{
            text-decoration: none;
            font-weight: 500;
            text-transform: uppercase;
            font-size: 0.8rem;
            letter-spacing: 1px;
            color: $black; 
        }
    }
}
</style>