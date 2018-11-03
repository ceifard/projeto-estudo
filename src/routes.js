import Cadastro from './components/pages/cadastro/Cadastro.vue';
import Listagem from './components/pages/listagem/Listagem.vue';

export const routes = [
    {
        path: '',
        component: Cadastro,
        title: 'Cadastro de Produtos',
    },      
    {
        path: '/cadastro',
        name: 'cadastro',
        title: 'Cadastro de Produtos',
        component: Cadastro,
    },    
    {
        path: '/listagem',
        name: 'listagem',
        title: 'Listagem de Produtos',
        component: Listagem,
    }
]