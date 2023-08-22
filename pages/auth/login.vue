<template>
  <div class="container-fluid">
    <div class="row">
     
      <div class="col-xl-7 p-0">
        <div class="login-card">
          <div>
            <div>
              <div class="logo text-start logo-and-text">
                <img class="img-fluid" src="/images/logo/logo_icon.png" alt="looginpage" />  
                <div>Real Estate</div>
              </div>
            </div>
            <div class="login-main">
              <form class="theme-form">
                <h4>ลงชื่อเข้าใช้</h4>
                <div class="form-group">
                  <label class="col-form-label">Email Address</label>
                  <input class="form-control" type="email" required="" placeholder="Test@gmail.com" />
                </div>
                <div class="form-group">
                  <label class="col-form-label">Password</label>
                  <div class="form-input position-relative">

                    <input class="form-control" :type="active ? 'password' : 'text'" name="login[password]" required=""
                      placeholder="*********" />
                    <div class="show-hide"><span :class="active ? 'show' : 'hide'" @click.prevent="show"> </span></div>
                  </div>
                </div>
                <div class="form-group mb-0">
                  <div class="checkbox p-0">
                    <input id="checkbox1" type="checkbox" />
                    <label class="text-muted" for="checkbox1">Remember password</label>
                  </div><nuxt-link class="link" to="/authentication/forget_password">Forgot password?</nuxt-link>
                  <router-link to="/">
                    <button class="btn btn-primary btn-lg btn-block w-100">
                     ลงชื่อเข้าใช้
                    </button>
                  </router-link>
                </div>
                <!-- <h6 class="text-muted mt-4 or">Or Sign in with</h6>
                <div class="social mt-4">
                  <div class="btn-showcase"><a class="btn btn-light" href="https://www.linkedin.com/login"
                      target="_blank"><vue-feather class="txt-linkedin" type="linkedin"></vue-feather>LinkedIn </a><a
                      class="btn btn-light" href="https://twitter.com/login?lang=en" target="_blank"><vue-feather
                        class="txt-twitter" type="twitter"></vue-feather>twitter</a><a class="btn btn-light"
                      href="https://www.facebook.com/" target="_blank"><vue-feather class="txt-fb"
                        type="facebook"></vue-feather>facebook</a></div>
                </div> -->
                <p class="mt-4 mb-0 text-center h3">
                 ยังไม่บัญชี ?<router-link class="ms-2" tag="a" to="/auth/register">
                  <b>ลงทะเบียนเข้าใช้งาน</b>
                  </router-link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-5 b-center bg-size" :style="{ backgroundImage: 'url(' + ('/images/login/bg.png') + ')' }"
        style="background-size: cover; background-position: center center; display: block;">
        <img class="bg-img-cover bg-center" src="/images/login/bg.png" alt="looginpage" style="display: none;" />
      </div>
    </div>
  </div>
</template>
<script>
definePageMeta({
  layout: 'custom'
})
export default {
  data() {
    return {
      active: true
    }
  },
  methods: {
    show() {
      this.active = !this.active
    }
  }
}

</script>