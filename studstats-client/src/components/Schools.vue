
<template>
    <div class="w3-content"> 
        <div class="w3-row" :class="showMe?'':'w3-hide'">
            <button class="w3-button" v-on:click="showMe=''">addSchool</button>
        </div>
        <div class="w3-card w3-padding" :class="showMe">
            <input class="w3-input" v-model="name"/>
            <input class="w3-input" v-model="address"/>
            <button class="w3-button" v-on:click="addSchool()">Add</button>
            <button class="w3-button" v-on:click="showMe='w3-hide'; name=''; address=''">Cancel</button>
        </div>
        <div v-for="(school,index) in schools" v-bind:key="school.id">
                <div class="w3-third w3-padding">
                    <div class="w3-card " style="min-height:50vh">
                        
                        <h2>{{school.name}}</h2>
                        <button v-on:click="deleteSchool(index)">Delete</button>
                    </div>
                </div>
        </div>
       
    </div>
</template>

<script>

// eslint-disable-next-line no-unused-vars
var cripto = require("crypto-js/md5")
    
    export default {
        name: 'Schools',
        
        data(){
            return{
                showMe:'w3-hide',
                address:'',
                name:''
            }
        },computed: {
            schools(){return this.$store.state.schools},
        },
        methods: {   
                   
            addSchool() {
                var newSchool = {
                    name:this.name, adresa:this.address,id:cripto(Date.now()).toString()
                }
                this.$store.commit('addSchool',newSchool)
            },
            deleteSchool: function(index){
                
                this.$store.commit('deleteSchool',index)
            },
            
        }
    }
</script>

<style scoped>

</style>