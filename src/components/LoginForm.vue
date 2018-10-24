<template>
  <modal-form-wrapper
    title="Log In"
    :onSubmitMethod="login"
    :errors="errors"
    :isModalOpen="false"
    :isSuccess="isLoginSuccess"
    :isSubmitting="isLoggingIn"
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
      errors: []
    }
  },
  methods: {
    checkForm () {
      if (this.email && this.password) return true

      this.errors = []

      if (!this.email) {
        this.errors.push('The email address is required.')
      }

      if (!this.password) {
        this.errors.push('The password is required.')
      }
    },
    login () {
      if (this.checkForm()) {
        this.isLoggingIn = true
        this.errors = []

        LoginApi.login(this.email, this.password)
          .then(user => {
            this.$store.dispatch('storeUserData', user)
            this.isLoginSuccess = true
            this.email = ''
            this.password = ''
          })
          .catch(error => {
            this.errors.push(error.message)
          })
          .finally(() => {
            this.isLoggingIn = false
          })
      }
    }
  }
}
</script>
