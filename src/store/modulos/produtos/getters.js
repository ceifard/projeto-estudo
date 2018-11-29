const produto = store => store.produto;
const nomeProd = store => store.produto.nomeProd;
const precoProd = store => store.produto.precoProd;
const categoriaProd = store => store.produto.categoriaProd;

export default {
    produto,
    nomeProd,
    precoProd,
    categoriaProd,    
}