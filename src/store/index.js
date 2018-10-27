const state = {
    carregando: false,
    mensagem: ''
}

const getters = {
    carregando: state => state.carregando,
    mensagem: state => state.mensagem,
}

const mutations = { 
    carregando(state, obj) {
        state.carregando = obj;
    },
    mensagem(state, obj) {
        state.mensagem = obj;
    }    
}