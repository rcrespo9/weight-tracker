<template>
  <modal-form-wrapper
    title="Log In"
    :onSubmitMethod="login"
  >
    <p v-if="errorMessage">{{errorMessage}}</p>
    <modal-form-field>
      <label for="email">Email Address
        <input type="email" v-model.trim="email">
      </label>
    </modal-form-field>

    <modal-form-field>
      <label for="password">Password
        <input type="password" v-model.trim="password">
      </label>
    </modal-form-field>
  </modal-form-wrapper>
</template>

<script>
import ModalFormWrapper from './ModalFormWrapper'
import ModalFormField from './ModalFormField'
import LoginApi from '@/api/Login'

export default {
  name: 'LoginForm',
  components: {
    ModalFormWrapper,
    ModalFormField
  },
  data () {
    return {
      email: '',
      password: '',
      isLoginSuccess: false,
      errorMessage: ''
    }
  },
  methods: {
    login () {
      LoginApi.login(this.email, this.password)
        .then(user => {
          this.isLoginSuccess = true
          this.email = ''
          this.password = ''
          this.$store.commit('setCurrentUser', user.user)
        })
        .catch(error => this.errorMessage = error.message)
    }
  }
}
</script>
