<template>
    <div class="container container-small">
        <div class="row tocenter">
            <table class="table">
                <thead>
                    <tr>
                        <th>Nome do Produto</th>
                        <th>Categoria do Produto</th>
                        <th>Preço do Produto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="produto in produtos" :key="produto.nomeProd">
                        <td>{{produto.nomeProd}}</td>
                        <td>{{produto.categoriaProd}}</td>
                        <td>{{produto.precoProd}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            produtos() {
                return this.$store.getters.produtos;
            }
        }
    }
</script>

<style lang="scss">

    .table {
        border: 1px solid #ccc;
         border-collapse: collapse;
        th, td {
            border: 1px solid #ccc;
            padding: 10px;
        }
    }

</style>

