<template>
    <nav>
        <Logo/>
        <div>
            <router-link to="/">Início</router-link>
            <router-link to="/favorite">Favoritos</router-link>
        </div>
    </nav>
</template>

<script>
import Logo from '@/components/Logo.vue'; 
export default {
    name: 'TheNav', 
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
    padding: 12px;
    position: fixed;
    //width: 100%;
    width: calc(100% - 12px);
    z-index: 3;
    top: 0;



    @include glass-effect;
    
    div{
        font-family: 'Rubik', sans-serif;
        color: white;
        
        a{
            text-decoration: none;
            font-weight: 500;
            text-transform: uppercase;
            font-size: 0.8rem;
            letter-spacing: 1px;
            color: white; 
            transition: .2s;
            background-color: transparent;
            padding: 4px 8px; 
        }

        .router-link-active{
            background-color: white;
            color: black;
            border-radius: 4px;
        }
    }

    
}
</style>