<template>
    <div class="app-header bordered">
        <div class="app-header__logo bordered">
            <h1>Logo</h1>
        </div>
        <div class="app-header__title bordered">
            <h2>{{titulo}}</h2>
        </div>
        <div class="app-header__user bordered">
            <div v-if="usuarioLogado">
                <span><font-awesome-icon class="usericon" icon="user" />Seja bem vindo, Fernando!</span>
                <p><a href="#" @click="disparaSair"><font-awesome-icon class="closeicon" icon="window-close" />Sair</a></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            titulo: {
                required: true,
            },
            usuarioLogado: Boolean
        },
        methods: {
            disparaSair() {
                this.$emit('sair');
            }
        }        
    }
</script>

<style lang="scss">
    .app-header{
        background: $cor-principal;
        color: $cor-letra-principal;
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
                margin-right: 2px;
                display: block;
                align-self: flex-end;
                font-size: 12px;
            }
            .usericon {
                margin-right: 7px;
                margin-bottom: 1.5px;
            }
            .closeicon {
                margin-right: 7px;
            }         
        }        
    }
</style>

