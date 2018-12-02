<template>
    <div class="container">
        <div class="form-container row">
            <div class="form-container__group flex-7">
                <label for="nomeProd">Nome do Produto:</label>
                <input id="nomeProd"
                       name="nomeProd"
                       v-model="nomeProd"
                       type="text">
            </div>
            <div class="form-container__group flex-2">
                <label for="precoProd">Preço do Produto:</label>
                <input id="precoProd"
                       name="precoProd" 
                       v-model="precoProd"
                       type="text">
            </div>
            <div class="form-container__group flex-3">
                <label for="categoriaProd">Categoria do Produto:</label>
                <input id="categoriaProd" 
                       name="categoriaProd" 
                       v-model="categoriaProd"
                       type="text">
            </div>            
        </div>

        <div class="row toend">
            <input class="button" type="button" value="Enviar">
        </div>
    </div>
</template>

<script>
    import { mapFields } from 'vuex-map-fields';
    export default {
        computed: {
            ...mapFields([
                'produto.nomeProd',
                'produto.precoProd',
                'produto.categoriaProd',
            ]),                                
        }
    }
</script>

<style lang="scss" scoped>

</style>