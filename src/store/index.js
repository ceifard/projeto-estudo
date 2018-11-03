import Vue from 'vue'
import Vuex from 'vuex'

import produtos from './modulos/produtos'

Vue.use(Vuex)

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

export default new Vuex.Store({
    state,
    mutations,
    getters,
    modules: {
        produtos
    }
  })