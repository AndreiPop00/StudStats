<template>
   
        <div id="cutia-principala">
           
            <div class="left-column">
                <div id="cutie1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat metus a sollicitudin egestas.  
                </div>
                <div id="cutie2">
                    <img  src="../assets/happy_people.png" alt="Imaginea nu a fost încărcată"/>
                </div>
            </div>
            <div id="cutie3">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat metus a sollicitudin egestas. Ut iaculis felis non purus aliquet, eu scelerisque sapien consectetur. Nam fermentum augue eu auctor semper. Nullam arcu turpis, dignissim volutpat pharetra vitae, condimentum non quam. Sed porttitor sagittis libero eget pulvinar. Cras eleifend ligula vel aliquet mollis. Pellentesque quis leo non justo molestie condimentum et nec magna. Donec ultrices enim nisl, quis consectetur lectus consequat quis. Vestibulum dolor mi, tristique a ornare a, venenatis vitae lectus. Maecenas dictum lorem ut laoreet tristique. Integer sit amet pharetra ex. 
            </div>
        </div>
    
</template>
<script>
export default {
    name: 'Home',
    props: {
      
    },
    methods:{
        functie(item){
         console.log(item)
        }
    },
    data(){
        return {
            show:false
        }
    }
}

</script>

<style scoped>
         img{
        max-width: 100%;
       
        display: block;
        object-fit: contain;
        }
        #cutia-principala {
            
            flex-grow: 1;
            display: flex;
            flex-direction: row;
            border: solid 1px;
            height: 100%;
            width: 100%;
        }
        #cutie1 {
            flex-grow: 2;
            border: solid 1px black;
            width: 730px;
            height:500px;
            background: rgb(0, 183, 255);
            font-family:"Roboto-Regular";
            font-size: 35px;
            text-align: center;
            padding: 100px;
        }
        #cutie2 {
            flex-grow: 2;
            border: solid 1px black;
            width: 730px;
            background:rgb(0, 183, 255);
        }
        #cutie3 {
            flex-grow: 2;
            border: solid 1px black;
            width:100%;
            background:rgb(238, 255, 0);
            font-family:"Roboto-Regular";
            font-size: 35px;
            text-align: center;
            padding: 100px;
        }
        .left-column{
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            
        }
    
    
</style>