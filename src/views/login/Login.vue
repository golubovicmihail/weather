<template>
    <div class="bg-clouds">
        <div class="container">
            <div class="row">
                <div class="col-md-5 login-page col-md-offset-4 m-t-100">
                    <div class="panel panel-default">

                        <div class="panel-body">

                            <div class="login-heading">
                                Welcome to WeatherCheck
                            </div>
                            <form class="form-horizontal" @submit.prevent="login">
                                <!-- E-Mail Address -->
                                <div class="form-group">

                                    <div class="col-md-8 col-md-offset-2">
                                        <input type="text" class="form-control" name="email" value="" placeholder="Email" v-model="email" autofocus>
                                    </div>
                                </div>

                                <!-- Password -->
                                <div class="form-group">

                                    <div class="col-md-8 col-md-offset-2">
                                        <input type="password" class="form-control" name="password" placeholder="Password" v-model="password">
                                    </div>
                                </div>

                                <!-- Remember Me -->
                                <div class="form-group">
                                    <div class="col-md-8 col-md-offset-2">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" name="remember">Remember Me
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <!-- Login Button -->
                                <div class="form-group login-button">
                                    <div class="col-md-5 col-md-offset-4">
                                        <button type="submit" class="btn btn-green">
                                            Login
                                        </button>
                                    </div>
                                </div>

                                <!-- Forgot Password -->
                                <div class="form-group">
                                    <div class="col-md-10 col-md-offset-1">
                                        <router-link class="btn-link" to="ForgotPassword">
                                            Forgot Password?
                                        </router-link>
                                        <router-link class="btn-link pull-right" to="Register">
                                            Create an Account
                                        </router-link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      errorMessage: null,
      successMessage: null,
      disableAllInputs: false,
      protectedUI: false,
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.successMessage = null
      this.errorMessage = null
      this.protectedUI = true
      this.$store.dispatch('authenticateUser', {
        Username: this.email,
        password: this.password
      }).then(() => {
        this.disableAllInputs = true
        this.password = ''
        this.errorMessage = null
        this.successMessage = 'Successfuly signed in'
      }).catch((err) => {
        this.errorMessage = err.message
        this.protectedUI = false
      })
    }
  }
}
</script>

<style >

</style>
