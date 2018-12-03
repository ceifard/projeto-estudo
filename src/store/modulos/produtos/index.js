import actions from './actions';
import { getField, updateField } from 'vuex-map-fields';

const state = {
  produtos: [],
  produto: {
    nomeProd: '',
    precoProd: '',
    categoriaProd: '',    
  }
}

const getters =  {
  produtos: () => state.produtos,
  getField,
}

const mutations =  {
  produtos: (state, obj) => state.produtos = obj,
  updateField,
}

export default {
  state,
  actions,
  getters,
  mutations,
};