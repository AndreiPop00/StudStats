<template>
   <div class="w3-content"> 
        <div class="w3-row" :class="showMe?'':'w3-hide'">
            <button class="w3-button" v-on:click="showMe=''">addGrade</button>
        </div>
        <div class="w3-card w3-padding" :class="showMe">
            <input class="w3-input" v-model="value"/>
            <button class="w3-button" v-on:click="addGrade()">Add</button>
            <button class="w3-button" v-on:click="showMe='w3-hide'; value='';">Cancel</button>
        </div>
        <div v-for="(grade) in grades" v-bind:key="grade._id">
                <div class="w3-third w3-padding">
                    <div class="w3-card " style="min-height:5vh">
                        
                        <h2>NOTA {{grade.value}}</h2>
        
                    </div>
                </div>
        </div>
       
    </div>
</template>

<script>
var cripto = require("crypto-js/md5")
    export default {
        name: 'Grades',
        
        data(){
            return{
            
                showMe:'w3-hide',
                value:''
               
            
            }
        },computed: {
            
            grades(){
                //console.log(this.$store.state.grades)
                return this.$store.state.grades
            },
        },
        methods: {   
                   
            addGrade() {
                var newGrade = {
                    _id:cripto(Date.now()).toString(), value:this.value,date_set:Date.now()
                }
                this.$store.commit('addGrade',newGrade)
                this.showMe='w3-hide'
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>