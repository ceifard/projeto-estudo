<template>
    <div class="login-box">
        <div class="container login">
            <div class="row tocenter">
                <span class="mensagem-login" v-if="mensagemLogin.length">
                    {{mensagemLogin}}
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
                <input class="button login__button" @click="cadastra()" type="button" value="Cadastrar">
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
            mensagemLogin: '',
        }
    },
    methods: {
        cadastra() {
            this.mensagemLogin = "";
            firebase.auth().createUserWithEmailAndPassword(this.email, this.senha).then(
                user => {
                        this.mensagemLogin = "Sua conta foi criada com sucesso!";
                    setTimeout(() => {
                        this.mensagemLogin = "";
                    }, 4000);
                },
                err => {
                    this.mensagemLogin = "Opa! Obtivemos o seguinte erro: " + err;
                    setTimeout(() => {
                        this.mensagemLogin = "";
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