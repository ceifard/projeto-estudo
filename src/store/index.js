import Vue from 'vue'
import Vuex from 'vuex'

import produtos from './modulos/produtos'

Vue.use(Vuex)

const state = {
    carregando: false,
    mensagem: '',
    usuarioLogado: false,
}

const getters = {
    carregando: state => state.carregando,
    mensagem: state => state.mensagem,
    usuarioLogado: state => state.usuarioLogado,
}

const mutations = { 
    carregando(state, obj) {
        state.carregando = obj;
    },
    mensagem(state, obj) {
        state.mensagem = obj;
    },
    usuarioLogado(state, obj) {
        state.usuarioLogado = obj;
    }            
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    modules: {
        produtos
    }
  })