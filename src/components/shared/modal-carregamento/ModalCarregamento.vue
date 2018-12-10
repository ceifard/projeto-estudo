<template>
    <div class="container-carregamento" v-if="carregando">
        <div class="modal-carregamento">
            <div class="conteudo-carregamento">
            <span> <div id="test" class="rotating"><font-awesome-icon class="faicon" icon="sync" /></div> Carregando informações...</span>
            </div>
        </div>
    </div>      
</template>

<script>
    export default {
        props: {
            carregando: {
                required: true,
                default: false,
            }
        }
    }
</script>

<style lang="scss">
.container-carregamento {
  content: '';
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  .modal-carregamento {
    display: flex;
    justify-content: center;
    .conteudo-carregamento {
      border-radius: 7px;
      background: white;
      padding: 15px;
      color: black;
      width: 15vw;
      min-width: 150px;
      text-align: center;
    }
    #test {
      width: 17px;
      height: 17px;
      display: inline-block;
    }
    .faicon { //tamanho do icone precisa ser do mesmo tamanho da div pra poder girar em torno de seu próprio centro
      width: inherit;
      height: inherit;      
    }
    @-webkit-keyframes rotating {
      from {
        -webkit-transform: rotate(0deg);
        transform-origin: center;
      } 
      to {
        -webkit-transform: rotate(360deg);
      }
    }
    .rotating {
      -webkit-animation: rotating 1s linear infinite;
    }
  }
}
</style>
