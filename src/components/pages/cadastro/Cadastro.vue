<template>
    <div class="container">
        <div class="form-container">
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
    </div>
</template>

<script>
    export default {
        computed: {
            nomeProd: {
                get () {
                    return this.$store.getters.nomeProd
                },
                set (value) {
                    this.$store.commit('setNomeProd', value)
                }
            },
            precoProd: {
                get () {
                    return this.$store.getters.precoProd
                },
                set (value) {
                    this.$store.commit('setPrecoProd', value)
                }
            },
            categoriaProd: {
                get () {
                    return this.$store.getters.categoriaProd
                },
                set (value) {
                    this.$store.commit('setCategoriaProd', value)
                }
            }                        
        }
    }
</script>

<style lang="scss" scoped>

</style>