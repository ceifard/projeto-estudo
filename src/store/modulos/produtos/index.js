import actions from './actions';
import { getField, updateField } from 'vuex-map-fields';
// import getters from './getters';
// import mutations from './mutations';

const state = {
  produto: {
    nomeProd: '',
    precoProd: '',
    categoriaProd: '',    
  }
}

const getters =  {
  getField,
}

const mutations =  {
  updateField,
}

export default {
  state,
  actions,
  getters,
  mutations,
};