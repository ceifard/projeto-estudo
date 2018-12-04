import Login from './components/pages/autenticacao/Login.vue';
import Cadastro from './components/pages/autenticacao/Cadastro.vue';
import CadastroProdutos from './components/pages/cadastro-produtos/CadastroProdutos.vue';
import ListagemProdutos from './components/pages/listagem-produtos/ListagemProdutos.vue';

export const routes = [
    {
        path: '',
        component: CadastroProdutos,
        title: 'Cadastro de Produtos',
    },      
    {
        path: '/cadastro-produtos',
        name: 'cadastro-produtos',
        title: 'Cadastro de Produtos',
        component: CadastroProdutos,
    },    
    {
        path: '/listagem-produtos',
        name: 'listagem-produtos',
        title: 'Listagem de Produtos',
        component: ListagemProdutos,
    },
    {
        path: '/cadastro',
        name: 'cadastro',
        title: 'Cadastro',
        component: Cadastro,
    },        
    {
        path: '/login',
        name: 'login',
        title: 'Login',
        component: Login,
    }    
]