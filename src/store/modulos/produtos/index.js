import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  produto: {
    nomeProd: '',
    precoProd: '',
    categoriaProd: '',    
  }
}

export default {
  state,
  actions,
  getters,
  mutations,
};