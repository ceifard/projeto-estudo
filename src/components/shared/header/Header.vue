<template>
    <header class="app-header bordered">
        <div class="app-header__logo bordered">
            <h1>Logo</h1>
        </div>
        <div class="app-header__title bordered">
            <h2>Listagem de Produtos</h2>
        </div>
        <div class="app-header__user bordered">
            <span>Seja bem vindo, Fernando!</span>
        </div>
    </header>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .app-header{
        display: flex;
        padding: 3px;
        font-size: 9px;
        &__logo h1{
            margin: 10px;
        }
        &__title {
            display: flex;
            justify-content: flex-end;
            flex: 1 1 auto;
        }        
        &__user {
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
                display: block;
                align-self: center;
                font-size: 12px;
            }
        }        
    }
</style>

