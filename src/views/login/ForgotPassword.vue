<template>
  <div class="bg-clouds">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 login-page forgot-password m-t-100">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="login-heading">
                Forgot Password?
              </div>
              <form class="form-horizontal" role="form" method="POST" action="">
                <!-- E-Mail Address -->
                <div class="form-group">
                  <p class="col-md-8 col-md-offset-2">Enter your email address to reset your password. You may need to check your spam folder or unblock <br> no-reply@weathercheck.co.</p>

                  <div class="col-md-8 col-md-offset-2">
                    <input type="email" class="form-control" name="email" value="" autofocus placeholder="Email">
                  </div>
                </div>
                <!-- Send Password Reset Link Button -->
                <div class="form-group login-button">
                  <div class="col-md-6 col-md-offset-4 ">
                    <button type="submit" class="btn btn-green">
                      Submit
                    </button>
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
      msg: 'Welcome to Crypto Info'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
