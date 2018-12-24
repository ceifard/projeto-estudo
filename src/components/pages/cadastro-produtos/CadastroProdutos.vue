<template>
    <div class="container">
        <div class="form-container row">
            <div class="form-container__group flex-7">
                <label for="nomeProd">Nome do Produto:</label>
                <input id="nomeProd"
                       name="nomeProd"
                       v-model="nomeProd"
                       v-validate="'required|min: 6|max: 50'"
                       type="text"
                       maxlength="50">
                <span>{{ errors.first('nomeProd') }}</span>       
            </div>
            <div class="form-container__group flex-2">
                <label for="precoProd">Preço do Produto:</label>
                <input id="precoProd"
                       name="precoProd" 
                       v-model="precoProd"
                       v-validate="'required|max: 50'"
                       type="text"
                       maxlength="50">
                <span>{{ errors.first('precoProd') }}</span>       
            </div>
            <div class="form-container__group flex-3">
                <label for="categoriaProd">Categoria do Produto:</label>
                <input id="categoriaProd" 
                       name="categoriaProd" 
                       v-model="categoriaProd"
                       v-validate="'required|max: 50'"
                       type="text"
                       maxlength="50">
                <span>{{ errors.first('categoriaProd') }}</span>       
            </div>            
        </div>

        <div class="row toend">
            <input class="button" @click="adicionaProduto()" type="button" value="Enviar">
        </div>
    </div>
</template>

<script>
    import { mapFields } from 'vuex-map-fields';
    export default {
        computed: {
            ...mapFields([
                'produto',
                'produto.nomeProd',
                'produto.precoProd',
                'produto.categoriaProd',
            ]),                                
        },
        methods: {
            adicionaProduto() {
                this.$validator.validateAll()
                        .then(success => {         

                        if(success) {
                            this.$store.dispatch('adicionaProduto');
                            console.log(this.errors)            
                        }  else {
                            window.scrollTo(0,0)
                        }

                    });
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>