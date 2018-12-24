import actions from './actions';
import { getField, updateField } from 'vuex-map-fields';

const state = {
  produtos: [],
  produto: {
    nomeProd: '',
    precoProd: '',
    categoriaProd: '',    
  },
  categorias: []
}

const getters =  {
  produtos: () => state.produtos,
  categorias: () => state.categorias,
  getField,
}

const mutations =  {
  produtos: (state, obj) => state.produtos = obj,
  categorias: (state, obj) => state.categorias = obj,
  updateField,
}

export default {
  state,
  actions,
  getters,
  mutations,
};