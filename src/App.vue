<template>
  <div>
    <Header />
    <router-view></router-view>
    <FooterLinks />
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Header from './views/common/Header'
import FooterLinks from './views/common/FooterLinks'
import './css/app.css'
import './css/design-app.css'
import './css/sweetalert.css'
import './css/vendor.min.css'

Vue.use(BootstrapVue)
export default {
  data () {
    return {
      loggedIn: false
    }
  },
  components: {
    Header,
    FooterLinks
  }
}
</script>

<style>

</style>
