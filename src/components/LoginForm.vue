<template>
  <modal-form-wrapper
    title="Log In"
    :onSubmitMethod="login"
    :errorMessage="errorMessage"
    :isSuccess="isLoginSuccess"
    :isSubmitting="isSubmitting"
  >
    <modal-form-field label="Email Address">
      <input type="email" v-model.trim="email">
    </modal-form-field>

    <modal-form-field label="Password">
      <input type="password" v-model.trim="password">
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
      isLoggingIn: false,
      errorMessage: ''
    }
  },
  methods: {
    login () {
      LoginApi.login(this.email, this.password)
      this.isLoggingIn = true

        .then(user => {
          this.isLoginSuccess = true
          this.email = ''
          this.password = ''
          this.$store.commit('setCurrentUser', user.user)
        })
        .catch(error => {
          this.errorMessage = error.message
        })
        .finally(() => {
          this.isLoggingIn = false
        })
    }
  }
}
</script>
