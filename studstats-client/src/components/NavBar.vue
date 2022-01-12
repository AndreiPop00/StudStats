<template>
    <div class="w3-bar w3-padding ">

        <button v-on:click="show='MainPage'" :class="show==='MainPage'?'w3-bottombar':''" class="w3-bar-item w3-btn w3-white w3-hover-black w3-round w3-margin-right format w3-border-black">
            <i class="glyphicon glyphicon-book"></i>
            <span class="w3-hide-small">
            Home
            </span>
        </button>

        <button v-if="is_auth" v-on:click="show='grades'" :class="show==='grades'?'w3-bottombar':''" class="w3-bar-item w3-btn w3-white w3-hover-black w3-round w3-margin-right format w3-border-black">
            <i class="glyphicon glyphicon-book"></i>
            <span class="w3-hide-small">
            Grades
            </span>
        </button>

        <button v-if="!is_auth" v-on:click="show='schools'" :class="show==='schools'?'w3-bottombar':''" class="w3-bar-item w3-btn w3-white w3-hover-black w3-round w3-margin-right format w3-border-black">
            <i class="glyphicon glyphicon-book"></i>
            <span class="w3-hide-small">
            Schools
            </span>
        </button>
        <button v-if="!is_auth" v-on:click="show='aboutUs'" :class="show==='aboutUs'?'w3-bottombar':''" class="w3-bar-item w3-btn w3-white w3-hover-black w3-round w3-margin-right format w3-border-black">
            <i class="glyphicon glyphicon-globe"></i>
            <span class="w3-hide-small">
            About Us
            </span>
        </button>
        <button v-if="!is_auth" v-on:click="show='pricing'" :class="show==='pricing'?'w3-bottombar':''" class="w3-bar-item w3-btn w3-white w3-hover-black w3-round w3-margin-right format w3-border-black">
            <i class="glyphicon glyphicon-usd"></i>
            <span class="w3-hide-small">
            Pricing
            </span>
        </button>
     </div>
        <div v-if="show==='schools'">
            <Schools />
        </div>
         <div v-else-if="show==='aboutUs'">
            <AboutUs />
        </div>
        <div v-else-if="show==='pricing'">
            <Pricing />
        </div>
        <div v-else-if="show==='grades'">
            <Grades />
        </div>
        <body v-else>
            <MainPage />
        </body>
   
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Schools from './Schools.vue'
import AboutUs from './AboutUs.vue'
import Pricing from './Pricing.vue'
import MainPage from './MainPage.vue'
import Grades from './Grades.vue'

export default {
    data(){
        return{
            show:true
        }
    },computed: {
        is_auth(){
            //console.log(this.$auth.isAuthenticated.value)
            return this.$auth.isAuthenticated.value
        },
    },
    components: {
    Schools,
    AboutUs,
    Pricing,
    MainPage,
    Grades
  }
}
</script>

<style scoped>
.vizibila{
    display: inline
}
.invizibila{
    display: none
}
.navbar{
    display:flex;
    flex: 1;
    justify-content: space-around;
    background-color: rgb(243, 243, 243);
    border: 4px black;
}
.icon{
    height:60px;
    width:175px;
}
.format{
    font-family:"Roboto-Regular";
    font-size: 20px;
}

</style>