<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <h2>Login to College Scorecard</h2>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                    label="E-mail"
                    v-model="email"
                    v-bind:rules="emailRules"
                    required>
                </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                    label="Password"
                    v-model="password"
                    v-bind:rules="passwordRules"
                    v-bind:type="'password'"
                    required>
                </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
                <v-btn v-on:click="cancel">Cancel</v-btn>
                <v-btn color="primary" v-on:click="login">Login</v-btn>
            </v-flex>
        </v-layout>
        <v-snackbar
            :timeout="6000"
            :top="true"
            v-model="showAlert"
        >
            {{ message }}
        </v-snackbar>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      showAlert: false,
      message: '',
      email: '',
      emailRules: [
        v => !!v || 'Email is required',
        v => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
      ]
    }
  },
  methods: {
    login: function () {
      const vm = this
      if (vm.password === 'test111') {
        this.$router.push({path: '/'})
      } else {
        vm.showAlert = true
        vm.message = 'Email or Password is invalid'
      }
    },
    cancel: function () {

    }
  }
}
</script>

<style>

</style>
