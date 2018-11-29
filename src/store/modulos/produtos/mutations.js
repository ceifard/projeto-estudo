const setProduto = (state, obj) => {
    state.produto = obj
};
const setNomeProd = (state, obj) => {
    state.produto.nomeProd = obj
};
const setPrecoProd = (state, obj) => {
    state.produto.precoProd = obj
};
const setCategoriaProd = (state, obj) => {
    state.produto.categoriaProd = obj
};


export default {
    setProduto,
    setNomeProd,
    setPrecoProd,
    setCategoriaProd,    
}