<template>
    <div class="login-box">
        <div class="container login">
            <div class="form-container row">
                <div class="form-container__group flex-12 login__item">
                    <label for="nomeProd">Email:</label>
                    <input id="nomeProd"
                        name="nomeProd"
                        
                        type="text">
                </div>
                <div class="form-container__group flex-12 login__item">
                    <label for="nomeProd">Senha:</label>
                    <input id="nomeProd"
                        name="nomeProd"
                        
                        type="password">
                </div>          
            </div>
            <div class="row tocenter login__buttons">
                <input class="button login__button" @click="adicionaProduto()" type="button" value="Esqueceu sua senha?">
                <input class="button login__button" @click="adicionaProduto()" type="button" value="Fazer login">
            </div>        
        </div>
    </div>
</template>

<script>

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