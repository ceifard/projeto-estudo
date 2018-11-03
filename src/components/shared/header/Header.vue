<template>
    <header class="app-header bordered">
        <div class="app-header__logo bordered">
            <h1>Logo</h1>
        </div>
        <div class="app-header__title bordered">
            <h2>Listagem de Produtos</h2>
        </div>
        <div class="app-header__user bordered">
            <span><font-awesome-icon class="usericon" icon="user" />Seja bem vindo, Fernando!</span>
        </div>
    </header>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .app-header{
        background: $cor-principal;
        color: $cor-letra-principal;
        box-shadow: 1px 1px 5px black;
        font-size: 9px;
        display: flex;
        padding: 3px;
        &__logo h1{
            margin: 10px;
        }
        &__logo {
            flex-basis: 170px;
        }
        &__title {
            display: flex;
            justify-content: flex-end;
            flex: 1 1 auto;
        }        
        &__user {
            flex-basis: 170px;
            display: none;
        }    
    }
    @media (min-width: 900px) {
        .app-header{
            font-size: initial;
            &__title {
                justify-content: center;
            }        
            &__user {
                margin-right: 10px;
                display: block;
                align-self: center;
                font-size: 12px;
            }
            .usericon {
                margin-right: 7px;
                margin-bottom: 1.5px;
            }         
        }        
    }
</style>

