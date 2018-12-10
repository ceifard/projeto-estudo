<template>
    <div class="login-box">    
        <div class="container login">
            <div class="row tocenter">
                <span class="mensagem-login" v-if="mensagem.length">
                    {{mensagem}}
                </span>
            </div>              
            <div class="form-container row">
                <div class="form-container__group flex-12 login__item">
                    <label for="email">Digite um email:</label>
                    <input id="email"
                        name="email"
                        v-model="email"
                        type="text">
                </div>
                <div class="form-container__group flex-12 login__item">
                    <label for="senha">Digite uma senha:</label>
                    <input id="senha"
                        name="senha"
                        v-model="senha"
                        type="password">
                </div>          
            </div>
            <div class="row tocenter login__buttons">
                <router-link to="/cadastro">
                    <input class="button login__button" @click="loga()" type="button" value="Não tem cadastro? clique aqui">
                </router-link>                      
                <input class="button login__button" @click="loga()" type="button" value="Fazer login">          
            </div>      
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    data() {
        return {
            email: '',
            senha: '',
        }
    },
    computed: {
        mensagem() {
            return this.$store.getters.mensagem;
        }
    },
    methods: {
        loga() {
            this.$store.commit('mensagem', '');
            this.$store.commit('carregando', true);
            firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
                user => {
                        this.$store.commit('mensagem', 'Logado com sucesso!');
                        this.$store.commit('usuarioLogado', true);
                        this.$store.commit('carregando', false);
                    setTimeout(() => {
                        this.$store.commit('mensagem', '');
                        this.$router.replace('principal');
                    }, 2000);
                },
                err => {
                    this.$store.commit('mensagem', 'Opa! Obtivemos o seguinte erro: ' + err);
                    this.$store.commit('carregando', false);
                    setTimeout(() => {
                        this.$store.commit('mensagem', '');
                    }, 4000);
                }
            )
        }
    }
}
</script>

<style lang="scss" scoped>
    .login-box {
        display: flex;
        align-items: center;
        margin-top: 5vh;
    }
    .login {
        max-width: 20vw;
        min-width: 350px;
        .login__item {
            padding: 5px 0;
        }
        .login__buttons {
            margin-top: 25px;
        }
        .login__button {
            font-size: 110%;
            margin: 0 5px;
        }        
    }
</style>