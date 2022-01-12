<template>
  <LoginBar />
  <NavBar />
</template>

<script>
import store from '../store/index'
import LoginBar from '../components/LoginBar.vue';
import NavBar from '../components/NavBar.vue';

export default {
  name: 'Home',
  components: {
    LoginBar,
    NavBar
  },
  mounted() {
    document.title = this.$store.state.langs["title"][this.$store.state.lang_id]
    store.commit('getUserData',this.$auth)
  }
}
</script>
