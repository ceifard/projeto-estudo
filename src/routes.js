import Principal from './components/pages/principal/Principal.vue';
import Login from './components/pages/autenticacao/Login.vue';
import Cadastro from './components/pages/autenticacao/Cadastro.vue';
import CadastroProdutos from './components/pages/cadastro-produtos/CadastroProdutos.vue';
import ListagemProdutos from './components/pages/listagem-produtos/ListagemProdutos.vue';

export const routes = [
    {
        path: '*',
        redirect: '/login'
    },  
    {
        path: '/',
        redirect: '/login'
    }, 
    {
        path: '/login',
        name: 'login',
        title: 'Login',
        component: Login,
    },       
    {
        path: '/cadastro',
        name: 'cadastro',
        title: 'Cadastro',
        component: Cadastro,
    },               
    {
        path: '/principal',
        component: Principal,
        meta: {
            requiresAuth: true
        },
        title: 'Principal',
    },      
    {
        path: '/cadastro-produtos',
        name: 'cadastro-produtos',
        title: 'Cadastro de Produtos',
        component: CadastroProdutos,
        meta: {
            requiresAuth: true
        }        
    },    
    {
        path: '/listagem-produtos',
        name: 'listagem-produtos',
        title: 'Listagem de Produtos',
        component: ListagemProdutos,
        meta: {
            requiresAuth: true
        }        
    },   
]