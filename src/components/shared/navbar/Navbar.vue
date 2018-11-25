<template>
    <nav class="navbar">
        <ul class="navbar__navmenu">
            <router-link class="navbar__navmenu--link" to="/cadastro">
                <li>Cadastro</li>
            </router-link>
            <router-link class="navbar__navmenu--link" to="/listagem">
                <li>Listagem</li>
            </router-link>
        </ul>
    </nav>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    a {
        text-decoration: none;
        color: $cor-letra-principal;
    }
    .navbar {
        background: $cor-principal;
        box-shadow: 1px 1px 5px #ccc;
        &__navmenu {
            display:flex;
            margin:0;
            padding: 0;
            justify-content: center;
            &--link{
                display: flex;
                padding: 5px;
                margin-right: 5px;
                height: 40px;
                li {
                    align-self: center;
                    list-style: none;
                }
            }
            &--link:hover{
                background: rgba(204, 204, 204, 0.342);
            }            
        } 
    }

</style>

