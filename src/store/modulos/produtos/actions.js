const adicionaProduto = ({commit, state}) => {
    let produtos = state.produtos;
    let produtoNovo = state.produto;
    produtos.push({...produtoNovo});
    commit('produtos', produtos);
    /* 
        Quando eu adicionava o produto novo pelo 'push' direto, esse produto continuava ligado ao produto do state e quando eu modificava alguma coisa no input, ele alterava no que já tinha sido adicionado ao array. Pra evitar essa ligação do objeto com o array, seria necessário criar uma cópia desse objeto e aí sim dar push.
        Isso só é possível de duas maneiras:
            produtos.push(Object.assign({}, produtoNovo));  --> cria uma cópia do objeto e joga essa cópia no target, retorna a cópia.
            produtos.push({...produtoNovo})); --> faz a mesma coisa que o de cima, porém ele não chama os chamados setters do js, então é uma forma mais robusta.
    */
}

export default {
    adicionaProduto
}