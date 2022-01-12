<template>
    <div v-if="contor==1">
        Avem o școală.
    </div>
    <div v-else-if="contor>1">
        Avem {{contor}} școli.
        
    </div>
      <div v-else-if="contor==0">
        Nu avem nicio școală.
        
    </div>
       <div v-else-if="contor==-1">
        Am șters o școală
        
    </div>
    <div v-else>
        Am șters {{contor *-1}} școli.
    </div>
    <button class="w3-bar-item w3-btn w3-white w3-hover-black w3-round w3-margin-right format w3-border-black" v-on:click="imiPlaceBranza()">Crește</button>
    <button class="w3-bar-item w3-btn w3-white w3-hover-black w3-round w3-margin-right format w3-border-black" v-on:click="nuImiPlaceBranza()">Scade</button>
    <button class="w3-bar-item w3-btn w3-white w3-hover-black w3-round w3-margin-right format w3-border-black" v-on:click="contor=1">Resetează</button>
</template>

<script>

    export default {
        name: 'AboutUs',
        data(){
            return{
            contor: 1
            }
        },        
        methods: {
            imiPlaceBranza() {
                this.contor++;
            },
              nuImiPlaceBranza() {
                this.contor--;
            }
        }
    }
    
</script>

<style lang="scss" scoped>

</style>