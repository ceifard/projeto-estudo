import Cadastro from './components/pages/cadastro/Cadastro.vue';
import Listagem from './components/pages/listagem/Listagem.vue';

export const routes = [
    {
        path: '',
        component: Cadastro,
    },      
    {
        path: '/cadastro',
        name: 'cadastro',
        component: Cadastro,
    },    
    {
        path: '/listagem',
        name: 'listagem',
        component: Listagem,
    }
]