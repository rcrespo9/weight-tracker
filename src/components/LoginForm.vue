<template>
  <modal-form-wrapper
    title="Log In"
    :onSubmitMethod="login"
  >
    <p v-if="error">{{error}}</p>
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
      success: false,
      error: ''
    }
  },
  methods: {
    login () {
      LoginApi.login(this.email, this.password)
        .then(() => {
          this.success = true;
          this.email = ''
          this.password = ''
        })
        .catch(error => this.error = error.message)
    }
  }
}
</script>
